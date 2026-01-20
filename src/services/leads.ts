import { supabase } from '@/lib/supabase/client'

export interface LeadData {
  name: string
  company: string
  email: string
  phone: string
  message?: string
}

export async function createLead(data: LeadData) {
  // Casting to 'any' to bypass type check as the table is newly created
  // and types might not be regenerated yet in the development environment
  return await supabase.from('leads' as any).insert({
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    message: data.message,
  })
}
