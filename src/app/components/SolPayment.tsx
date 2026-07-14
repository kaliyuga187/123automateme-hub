'use client';

import { useState } from 'react';

const SOL_ADDRESS = '2PZoHv6b8Y9LdPdhD2FjaU47qnZTyFGHzubkSdTeg4La';

export function CopyAddressButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SOL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = SOL_ADDRESS;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group w-full rounded-xl border p-4 text-left transition-all hover:border-pink-500/40"
      style={{ background: 'var(--cv-card)', borderColor: copied ? 'rgba(16,185,129,0.5)' : 'var(--cv-border)' }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-jb text-[10px] text-purple-500 tracking-widest">SOL WALLET ADDRESS</span>
        <span className={`px-2 py-1 rounded-full font-jb text-[10px] transition-all ${
          copied
            ? 'bg-green-500/10 text-green-400 border border-green-500/30'
            : 'bg-pink-500/10 text-pink-400 border border-pink-500/30'
        }`}>
          {copied ? 'COPIED!' : 'CLICK TO COPY'}
        </span>
      </div>
      <div className="font-jb text-sm text-white break-all leading-relaxed">
        {SOL_ADDRESS}
      </div>
    </button>
  );
}

export function PayButton({ amount, label }: { amount: number; label: string }) {
  const [copied, setCopied] = useState(false);

  const solPayUrl = `solana:${SOL_ADDRESS}?amount=${amount}&label=${encodeURIComponent(label)}&message=${encodeURIComponent(`Purchase: ${label}`)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SOL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex gap-2">
      <a
        href={solPayUrl}
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-raj font-bold text-xs text-white transition-all hover:scale-[1.02]"
        style={{ background: 'linear-gradient(135deg,#9945FF,#14F195)', boxShadow: '0 0 15px rgba(153,69,255,0.3)' }}
      >
        <SolLogo />
        PAY {amount} SOL
      </a>
      <button
        onClick={handleCopy}
        className="px-3 py-2 rounded-lg font-jb text-[10px] border transition-all hover:border-pink-500/40"
        style={{ background: 'var(--cv-card)', borderColor: 'var(--cv-border)', color: copied ? '#10b981' : '#c084fc' }}
        title="Copy wallet address"
      >
        {copied ? 'COPIED' : 'COPY'}
      </button>
    </div>
  );
}

function SolLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.3 93.1C23.1 92.3 24.2 91.8 25.4 91.8H121.9C123.7 91.8 124.6 94 123.3 95.3L105.7 112.9C104.9 113.7 103.8 114.2 102.6 114.2H6.1C4.3 114.2 3.4 112 4.7 110.7L22.3 93.1Z" fill="url(#sol1)"/>
      <path d="M22.3 15.1C23.1 14.3 24.2 13.8 25.4 13.8H121.9C123.7 13.8 124.6 16 123.3 17.3L105.7 34.9C104.9 35.7 103.8 36.2 102.6 36.2H6.1C4.3 36.2 3.4 34 4.7 32.7L22.3 15.1Z" fill="url(#sol2)"/>
      <path d="M105.7 53.9C104.9 53.1 103.8 52.6 102.6 52.6H6.1C4.3 52.6 3.4 54.8 4.7 56.1L22.3 73.7C23.1 74.5 24.2 75 25.4 75H121.9C123.7 75 124.6 72.8 123.3 71.5L105.7 53.9Z" fill="url(#sol3)"/>
      <defs>
        <linearGradient id="sol1" x1="114.6" y1="4.3" x2="28.6" y2="123.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3"/><stop offset="1" stopColor="#DC1FFF"/>
        </linearGradient>
        <linearGradient id="sol2" x1="80.3" y1="-14.2" x2="-5.7" y2="104.8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3"/><stop offset="1" stopColor="#DC1FFF"/>
        </linearGradient>
        <linearGradient id="sol3" x1="97.4" y1="-4.9" x2="11.4" y2="114.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3"/><stop offset="1" stopColor="#DC1FFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
