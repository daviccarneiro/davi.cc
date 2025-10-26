import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, message } = await request.json();

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

    const fromAddress = import.meta.env.RESEND_FROM || 'Contato davi.cc <onboarding@resend.dev>';
    const toAddress = import.meta.env.RESEND_TO || 'davicarneirodcc@gmail.com';

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject: title,
      reply_to: email,
      html
    } as any);

    if (error) {
      return new Response(JSON.stringify({ error: 'Falha ao enviar email.', errorDetail: String(error) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Requisição inválida.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
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


