const SESSION_COOKIE = 'mobisur_admin_session';
const SESSION_TTL_SECONDS = 12 * 60 * 60;
const LOGIN_PATH = '/login';
const LOGOUT_PATH = '/logout';
const DEFAULT_ADMIN_PATH = '/admin.html';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === LOGIN_PATH) {
      const session = await readSession(request, env);

      if (request.method === 'GET') {
        if (session.ok) return redirect(DEFAULT_ADMIN_PATH);
        return htmlResponse(renderLoginPage(''));
      }

      if (request.method === 'POST') {
        return handleLogin(request, env);
      }

      return new Response('Méthode non autorisée', { status: 405 });
    }

    if (url.pathname === LOGOUT_PATH) {
      return logoutResponse();
    }

    if (isAdminPath(url.pathname)) {
      const session = await readSession(request, env);

      if (!session.ok) {
        return htmlResponse(renderLoginPage('Identifiez-vous pour accéder à l’administration.'), 401);
      }

      const adminUrl = new URL(DEFAULT_ADMIN_PATH, url.origin);
      const adminRequest = new Request(adminUrl, request);
      return env.ASSETS.fetch(adminRequest);
    }

    return env.ASSETS.fetch(request);
  }
};

function isAdminPath(pathname) {
  return pathname === '/admin' || pathname === '/admin/' || pathname === '/admin.html';
}

async function handleLogin(request, env) {
  if (!env.ADMIN_USER || !env.ADMIN_PASSWORD || !env.ADMIN_SESSION_SECRET) {
    return htmlResponse(
      renderLoginPage('Configuration incomplète : ajoutez ADMIN_USER, ADMIN_PASSWORD et ADMIN_SESSION_SECRET dans les secrets Cloudflare.'),
      500
    );
  }

  const form = await request.formData();
  const username = String(form.get('username') || '');
  const password = String(form.get('password') || '');

  const userOk = await safeEqual(username, env.ADMIN_USER);
  const passwordOk = await safeEqual(password, env.ADMIN_PASSWORD);

  if (!userOk || !passwordOk) {
    return htmlResponse(renderLoginPage('Identifiants incorrects.'), 401);
  }

  const token = await createSession(username, env);
  const headers = new Headers();
  headers.set('Location', DEFAULT_ADMIN_PATH);
  headers.append('Set-Cookie', `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_TTL_SECONDS}`);
  return new Response(null, { status: 303, headers });
}

function logoutResponse() {
  const headers = new Headers();
  headers.set('Location', LOGIN_PATH);
  headers.append('Set-Cookie', `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`);
  return new Response(null, { status: 303, headers });
}

async function createSession(username, env) {
  const payload = {
    u: username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  };
  const payloadPart = base64UrlEncodeText(JSON.stringify(payload));
  const signature = await hmacSign(payloadPart, env.ADMIN_SESSION_SECRET);
  return `${payloadPart}.${signature}`;
}

async function readSession(request, env) {
  try {
    const token = getCookie(request.headers.get('Cookie') || '', SESSION_COOKIE);
    if (!token || !env.ADMIN_SESSION_SECRET) return { ok: false };

    const parts = token.split('.');
    if (parts.length !== 2) return { ok: false };

    const [payloadPart, signature] = parts;
    const expectedSignature = await hmacSign(payloadPart, env.ADMIN_SESSION_SECRET);
    if (!(await safeEqual(signature, expectedSignature))) return { ok: false };

    const payload = JSON.parse(base64UrlDecodeText(payloadPart));
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return { ok: false };

    return { ok: true, username: payload.u };
  } catch (error) {
    return { ok: false };
  }
}

function getCookie(cookieHeader, name) {
  return cookieHeader
    .split(';')
    .map(part => part.trim())
    .find(part => part.startsWith(`${name}=`))
    ?.slice(name.length + 1) || '';
}

async function hmacSign(value, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  return base64UrlEncodeBytes(new Uint8Array(signature));
}

async function safeEqual(a, b) {
  const encoder = new TextEncoder();
  const aHash = new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(String(a))));
  const bHash = new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(String(b))));

  if (aHash.length !== bHash.length) return false;

  let diff = 0;
  for (let i = 0; i < aHash.length; i += 1) {
    diff |= aHash[i] ^ bHash[i];
  }
  return diff === 0;
}

function base64UrlEncodeText(value) {
  return base64UrlEncodeBytes(new TextEncoder().encode(value));
}

function base64UrlEncodeBytes(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecodeText(value) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function redirect(path) {
  return new Response(null, {
    status: 303,
    headers: { Location: path }
  });
}

function htmlResponse(html, status = 200) {
  return new Response(html, {
    status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function renderLoginPage(errorMessage) {
  const safeError = escapeHtml(errorMessage || '');
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Connexion – Administration MobiSûr</title>
  <style>
    :root {
      --bg:#fbfaf8;
      --panel:#ffffff;
      --line:#eadfe1;
      --text:#280c10;
      --muted:#735f63;
      --brand-brown:#280c10;
      --brand-blue:#3633d2;
      --brand-blue-dark:#3431d1;
      --brand-yellow:#ffff66;
      --brand-blue-soft:#f0f0ff;
      --err:#991b1b;
      --err-bg:#fef2f2;
    }
    * { box-sizing:border-box; }
    body {
      margin:0;
      min-height:100vh;
      display:grid;
      place-items:center;
      padding:22px;
      font-family:Arial, Helvetica, sans-serif;
      color:var(--text);
      background:
        radial-gradient(circle at top left, rgba(255,255,102,.36), transparent 28%),
        radial-gradient(circle at top right, rgba(54,51,210,.12), transparent 32%),
        var(--bg);
    }
    .login-card {
      width:min(460px, 100%);
      background:rgba(255,255,255,.96);
      border:1px solid var(--line);
      border-top:6px solid var(--brand-blue);
      border-radius:24px;
      padding:28px;
      box-shadow:0 22px 70px rgba(40,12,16,.12);
    }
    .brand-mark {
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:8px 12px;
      border-radius:999px;
      background:var(--brand-blue-soft);
      color:var(--brand-blue-dark);
      font-size:13px;
      font-weight:800;
      border:1px solid #d9d8ff;
    }
    .dot { width:9px; height:9px; border-radius:999px; background:var(--brand-yellow); box-shadow:0 0 0 3px rgba(255,255,102,.35); }
    h1 { margin:18px 0 8px; color:var(--brand-brown); font-size:30px; letter-spacing:-.04em; }
    p { margin:0 0 22px; color:var(--muted); line-height:1.45; }
    label { display:block; margin:0 0 6px; font-size:13px; font-weight:700; }
    input {
      width:100%;
      border:1px solid #d8c8cb;
      border-radius:12px;
      padding:12px 13px;
      font-size:15px;
      margin-bottom:14px;
      background:white;
    }
    input:focus { outline:3px solid rgba(255,255,102,.75); border-color:var(--brand-blue); }
    button {
      width:100%;
      border:0;
      border-radius:12px;
      padding:12px 14px;
      background:var(--brand-blue);
      color:white;
      font-weight:800;
      font-size:15px;
      cursor:pointer;
      box-shadow:0 8px 18px rgba(54,51,210,.16);
    }
    button:hover { filter:brightness(.96); }
    .error {
      margin-bottom:14px;
      padding:12px;
      border-radius:12px;
      background:var(--err-bg);
      color:var(--err);
      border:1px solid #fecaca;
      font-size:13px;
      line-height:1.35;
    }
    .hint { margin-top:14px; color:var(--muted); font-size:12px; line-height:1.4; }
  </style>
</head>
<body>
  <form class="login-card" method="POST" action="${LOGIN_PATH}">
    <div class="brand-mark"><span class="dot"></span>MobiSûr — Administration</div>
    <h1>Connexion</h1>
    <p>Accès réservé à l’interface d’administration.</p>
    ${safeError ? `<div class="error">${safeError}</div>` : ''}
    <label for="username">Identifiant</label>
    <input id="username" name="username" type="text" autocomplete="username" required autofocus />
    <label for="password">Mot de passe</label>
    <input id="password" name="password" type="password" autocomplete="current-password" required />
    <button type="submit">Se connecter</button>
    <div class="hint">La session est stockée dans un cookie sécurisé et expire automatiquement.</div>
  </form>
</body>
</html>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
