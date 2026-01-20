import { supabase } from '@/lib/supabase/client'
import type { Database } from '@/lib/supabase/types'

export type LeadInsert = Database['public']['Tables']['leads']['Insert']

export async function createLead(data: LeadInsert) {
  return await supabase.from('leads').insert(data)
}
