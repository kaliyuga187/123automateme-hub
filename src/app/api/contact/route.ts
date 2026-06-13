import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot
};

const RATE_BUCKET = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT = 5; // 5 messages per IP per hour

function getClientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  const real = req.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}

function checkRate(ip: string): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const bucket = RATE_BUCKET.get(ip);
  if (!bucket || bucket.resetAt < now) {
    RATE_BUCKET.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true };
  }
  if (bucket.count >= RATE_LIMIT) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendViaResend(payload: Required<Pick<ContactPayload, 'name' | 'email' | 'message'>> & { company?: string }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  if (!to) throw new Error('CONTACT_TO_EMAIL is not set');

  const subject = `New contact form submission from ${payload.name}`;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ''}
    <hr />
    <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
  `;
  const text = `New contact form submission\n\nName: ${payload.name}\nEmail: ${payload.email}\n${payload.company ? `Company: ${payload.company}\n` : ''}\nMessage:\n${payload.message}\n`;

  const result = await resend.emails.send({ from, to, subject, html, text, replyTo: payload.email });
  if ('error' in result && result.error) {
    throw new Error(`Resend error: ${result.error.message}`);
  }
}

async function sendViaWebhook(payload: Required<Pick<ContactPayload, 'name' | 'email' | 'message'>> & { company?: string }) {
  const url = process.env.CONTACT_WEBHOOK_URL!;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: '123automateme.com',
      submittedAt: new Date().toISOString(),
      ...payload,
    }),
  });
  if (!res.ok) {
    throw new Error(`Webhook returned ${res.status}`);
  }
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rate = checkRate(ip);
  if (!rate.ok) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(rate.retryAfterSec ?? 3600) } },
    );
  }

  let body: ContactPayload;
  const contentType = req.headers.get('content-type') ?? '';
  try {
    if (contentType.includes('application/json')) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = {
        name: String(form.get('name') ?? ''),
        email: String(form.get('email') ?? ''),
        company: String(form.get('company') ?? ''),
        message: String(form.get('message') ?? ''),
        website: String(form.get('website') ?? ''),
      };
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: if filled, silently accept and drop the message.
  if (body.website && body.website.trim() !== '') {
    return NextResponse.redirect(new URL('/thanks', req.url), { status: 303 });
  }

  const name = (body.name ?? '').trim().slice(0, 200);
  const email = (body.email ?? '').trim().slice(0, 200);
  const company = (body.company ?? '').trim().slice(0, 200);
  const message = (body.message ?? '').trim().slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Name, email, and message are required.' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: 'Message is too short. Please add a bit more detail.' }, { status: 400 });
  }

  const payload = { name, email, message, company };

  const resendKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  try {
    if (resendKey) {
      await sendViaResend(payload);
    } else if (webhookUrl) {
      await sendViaWebhook(payload);
    } else {
      // No delivery channel configured — log to server console (visible in hosting platform logs).
      // Do NOT echo the message back to the client; just confirm receipt.
      console.log('[contact] (no delivery channel — logged only) ', JSON.stringify(payload));
    }
  } catch (err) {
    console.error('[contact] delivery failed', err);
    return NextResponse.json(
      { ok: false, error: 'We could not send your message right now. Please email us directly.' },
      { status: 502 },
    );
  }

  // For HTML form posts, redirect to /thanks. For JSON posts, return JSON.
  if (contentType.includes('application/json')) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.redirect(new URL('/thanks', req.url), { status: 303 });
}
