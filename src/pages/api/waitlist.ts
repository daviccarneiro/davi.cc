import type { APIRoute } from 'astro';

export const prerender = false;

const WEBHOOK_URL = import.meta.env.N8N_WEBHOOK_URL || '';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, name } = await request.json().catch(() => ({}));

    if (!WEBHOOK_URL) {
      return new Response(
        JSON.stringify({ error: 'Serviço temporariamente indisponível.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios: email e nome.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: String(email).trim(), name: String(name).trim() })
    });

    if (response.ok) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    throw new Error('Falha ao salvar na waitlist');
  } catch (err) {
    console.error('[waitlist] Error:', err);
    return new Response(
      JSON.stringify({ error: 'Não foi possível completar o cadastro. Tente novamente.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
