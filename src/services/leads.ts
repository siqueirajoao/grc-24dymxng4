import { supabase } from '@/lib/supabase/client'

export interface LeadData {
  name: string
  email: string
  phone: string
  company?: string
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
