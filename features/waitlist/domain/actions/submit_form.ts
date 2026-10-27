// src/features/forms/domain/actions/submit_form.ts
'use server'

import { createSecondaryServerClient } from "@/lib/supabase/waitlist_db/secondary_server_client"


export async function submitFormData(formData: FormData) {
  const supabase = await createSecondaryServerClient()
  
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const { error } = await supabase
    .from('form_submissions')
    .insert(rawData)

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}