'use server';

import { createClient } from '@/lib/supabase/server';
import { School } from '../domain/types';

export async function getSchoolsAction() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('schools')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching schools:', error);
    return { success: false, error: error.message };
  }

  return { success: true, data: data as School[] };
}
