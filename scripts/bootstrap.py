#!/usr/bin/env python3
"""One-shot SSH bootstrap using paramiko (pure-Python, no PTY needed on Windows).

Steps:
  1. SSH to apex-production with the one-time password.
  2. Install our public key into ~/.ssh/authorized_keys (chmod 600).
  3. Backup and harden /etc/ssh/sshd_config:
       PasswordAuthentication no
       ChallengeResponseAuthentication no
       UsePAM no
  4. sshd -t (validate config)
  5. systemctl restart sshd (or service ssh restart)
  6. Wipe the password temp file (random overwrite + delete).

NEVER prints the password.
"""
import os, sys, paramiko, secrets

PASSWORD_FILE = os.path.expanduser('~/.ssh/.tmp_pw')
PUBKEY_FILE   = os.path.expanduser('~/.ssh/id_ed25519.pub')
HOST          = '139.180.174.4'
USER          = 'root'
PORT          = 22

def fail(msg):
    print(f'\n[FAIL] {msg}', file=sys.stderr)
    sys.exit(1)

# Read inputs
if not os.path.exists(PASSWORD_FILE):
    fail(f'password temp file missing: {PASSWORD_FILE}')
password = open(PASSWORD_FILE, 'rb').read().decode('utf-8').strip()
if not password:
    fail('password temp file is empty')
pubkey = open(PUBKEY_FILE, 'r').read().strip()
if not pubkey.startswith('ssh-ed25519'):
    fail('public key is not a valid ed25519 key')

print(f'[+] Connecting to {USER}@{HOST}:{PORT} with password (one-time)...')
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
try:
    client.connect(
        hostname=HOST, port=PORT, username=USER, password=password,
        look_for_keys=False, allow_agent=False,
        timeout=20, banner_timeout=20, auth_timeout=20,
    )
except paramiko.AuthenticationException:
    fail('password was REJECTED by the server')
except Exception as e:
    fail(f'connection error: {type(e).__name__}: {e}')
print('[+] Authenticated as root.\n')

def run(cmd: str, check: bool = True) -> tuple[int, str, str]:
    """Run a command via SSH. Returns (exit_code, stdout, stderr)."""
    print(f'$ {cmd}')
    stdin, stdout, stderr = client.exec_command(cmd, timeout=30)
    out = stdout.read().decode('utf-8', errors='replace').rstrip()
    err = stderr.read().decode('utf-8', errors='replace').rstrip()
    code = stdout.channel.recv_exit_status()
    if out: print(out)
    if err: print(f'(stderr) {err}')
    if check and code != 0:
        fail(f'command exited with code {code}: {cmd}')
    return code, out, err

# 1. Install public key
print('━━━ STEP 1: Install public key ━━━')
run('mkdir -p ~/.ssh && chmod 700 ~/.ssh')
# Write the key by appending to authorized_keys (idempotent)
run(f"""cat >> ~/.ssh/authorized_keys << 'KEYEND'
{pubkey}
KEYEND""")
run('chmod 600 ~/.ssh/authorized_keys && wc -l ~/.ssh/authorized_keys')
run("head -1 ~/.ssh/authorized_keys | cut -c1-60 && echo '(full key length above)'")

# 2. Backup sshd_config
print('\n━━━ STEP 2: Backup sshd_config ━━━')
run('cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak.$(date +%Y%m%d-%H%M%S) && echo BACKUP_OK')
run('ls -la /etc/ssh/sshd_config* | tail -3')

# 3. Harden sshd_config
print('\n━━━ STEP 3: Harden sshd_config ━━━')
run(r"sed -i -E 's/^#?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config")
run(r"sed -i -E 's/^#?ChallengeResponseAuthentication.*/ChallengeResponseAuthentication no/' /etc/ssh/sshd_config")
run(r"sed -i -E 's/^#?UsePAM.*/UsePAM no/' /etc/ssh/sshd_config")
run(r"grep -E '^(Password|ChallengeResponse|UsePAM|Pubkey|PermitRootLogin)' /etc/ssh/sshd_config || echo '(no matching lines)'")

# 4. Validate
print('\n━━━ STEP 4: Validate sshd config ━━━')
code, _, _ = run('sshd -t && echo SSHD_CONFIG_VALID', check=False)
if code != 0:
    fail('sshd config test FAILED — not restarting')

# 5. Restart sshd
print('\n━━━ STEP 5: Restart sshd ━━━')
run('(systemctl restart ssh 2>/dev/null || systemctl restart sshd 2>/dev/null || service ssh restart 2>/dev/null) && echo SSHD_RESTARTED')

# 6. Verify
print('\n━━━ STEP 6: Verify auth methods ━━━')
run('sshd -T 2>/dev/null | grep -E "^(passwordauthentication|pubkeyauthentication|challengeresponseauthentication|usepam|permitrootlogin)" | sort')

client.close()

# 7. Wipe the password file
print('\n━━━ STEP 7: Wipe password temp file ━━━')
try:
    size = os.path.getsize(PASSWORD_FILE)
    with open(PASSWORD_FILE, 'wb') as f:
        f.write(secrets.token_bytes(size))
    os.remove(PASSWORD_FILE)
    print(f'    wiped and removed {PASSWORD_FILE}')
except Exception as e:
    print(f'    WARN: could not wipe: {e}', file=sys.stderr)

print('\n[+] Bootstrap complete.')
print('    Public key installed at /root/.ssh/authorized_keys')
print('    Password auth DISABLED in sshd_config')
print('    sshd restarted')
print('\n[+] Next: ssh root@139.180.174.4 (no password prompt)')
