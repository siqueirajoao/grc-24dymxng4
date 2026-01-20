const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export interface LeadData {
  name: string
  company: string
  email: string
  phone: string
  message?: string
}

export async function insertLead(data: LeadData) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials missing')
    throw new Error(
      'Erro de configuração: Credenciais do banco de dados não encontradas.',
    )
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    console.error('Supabase error:', errorData)
    throw new Error(errorData.message || 'Falha ao enviar dados')
  }

  return true
}
