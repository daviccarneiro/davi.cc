import type { APIRoute } from 'astro';

export const prerender = false;

const N8N_MCP_URL = 'http://10.0.0.167:5678/mcp-server/http';
const N8N_MCP_TOKEN = import.meta.env.N8N_MCP_TOKEN || '';
const DATA_TABLE_ID = 'ZHSkq5C2EAqKc7WY';
const PROJECT_ID = 'gM5xTnOotrj3kXd8';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, name } = await request.json().catch(() => ({}));

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios: email e nome.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payload = {
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: {
        name: 'add_data_table_rows',
        arguments: {
          projectId: PROJECT_ID,
          dataTableId: DATA_TABLE_ID,
          rows: [{ email: String(email).trim(), name: String(name).trim() }]
        }
      }
    };

    const response = await fetch(N8N_MCP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream',
        'Authorization': `Bearer ${N8N_MCP_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    const lines = text.split('\n').filter(l => l.startsWith('data:'));
    if (lines.length === 0) {
      throw new Error('Resposta inesperada do servidor');
    }

    const result = JSON.parse(lines[0].slice(5));

    if (result?.result?.content?.[0]?.text) {
      const data = JSON.parse(result.result.content[0].text);
      if (data.success || data.insertedCount > 0) {
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
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
