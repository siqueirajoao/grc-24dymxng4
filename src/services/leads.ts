import { supabase } from '@/lib/supabase'

export interface LeadData {
  name: string
  email: string
  company: string
  role?: string
  message?: string
}

export const createLead = async (data: LeadData) => {
  const { error } = await supabase.from('leads').insert([data])
  return { error }
}
