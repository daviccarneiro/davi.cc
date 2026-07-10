import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // On Cloudflare, runtime secrets live in locals.runtime.env, not import.meta.env
    const env = (locals as any).runtime?.env ?? import.meta.env;
    const WEBHOOK_URL = env.N8N_WEBHOOK_URL || '';

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

    throw new Error('Falha ao salvar no 1minuto');
  } catch (err) {
    console.error('[1minuto] Error:', err);
    return new Response(
      JSON.stringify({ error: 'Não foi possível completar o cadastro. Tente novamente.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
