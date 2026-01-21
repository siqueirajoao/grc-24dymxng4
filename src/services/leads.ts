import { supabase } from '@/lib/supabase/client'

export interface LeadData {
  name: string
  email: string
  company?: string
  phone?: string
  role?: string
  message?: string
}

export const createLead = async (lead: LeadData) => {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()
    .single()

  return { data, error }
}
