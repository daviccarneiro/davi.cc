import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { name, email, subject, message } = await request.json().catch(() => ({}));

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios: nome, email, mensagem.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const title = subject && String(subject).trim() ? String(subject).trim() : 'Nova mensagem via davi.cc';

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">Nova mensagem</h2>
        <p style="margin:0 0 8px"><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px"><strong>Assunto:</strong> ${escapeHtml(title)}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e5e5"/>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    const apiKey = import.meta.env.RESEND_API_KEY;
    const fromAddress = import.meta.env.RESEND_FROM || 'davi.cc <onboarding@resend.dev>';
    const toAddress = import.meta.env.RESEND_TO || 'davicarneirodcc@gmail.com';

    if (!apiKey) {
      console.error('[contact] Missing RESEND_API_KEY');
      return new Response(JSON.stringify({ error: 'Email service not configured (API key missing).' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!import.meta.env.RESEND_FROM) {
      console.warn('[contact] RESEND_FROM not set. Falling back to onboarding@resend.dev (may be blocked for unverified domains).');
    }

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject: title,
      html,
      // set both casings to be safe across SDK versions
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      reply_to: email,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      replyTo: email,
    } as any);

    if (error) {
      console.error('[contact] Resend error:', error);
      return new Response(JSON.stringify({ error: 'Falha ao enviar email.', detail: String(error) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ ok: true, id: (data as any)?.id ?? null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return new Response(JSON.stringify({ error: 'Requisição inválida.', detail: String(err) }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


