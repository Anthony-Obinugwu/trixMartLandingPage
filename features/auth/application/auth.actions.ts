'use server';

import { SupabaseAuthRepository } from '../data/supabase-auth.repository';
import { LoginCredentials, SignupPayload } from '../domain/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const authRepo = new SupabaseAuthRepository();

export async function loginAction(credentials: LoginCredentials) {
  const result = await authRepo.login(credentials);
  
  if (result.success) {
    revalidatePath('/', 'layout');
    return { success: true };
  } else {
    return { success: false, error: result.error.message };
  }
}

export async function signupAction(payload: SignupPayload) {
  const result = await authRepo.signup(payload);
  
  if (result.success) {
    revalidatePath('/', 'layout');
    return { success: true };
  } else {
    return { success: false, error: result.error.message };
  }
}

export async function logoutAction() {
  const result = await authRepo.logout();
  
  if (result.success) {
    revalidatePath('/', 'layout');
    redirect('/auth');
  } else {
    return { success: false, error: result.error.message };
  }
}

export async function getCurrentUserAction() {
  const result = await authRepo.getCurrentUser();
  if (result.success) {
    return { success: true, data: result.value };
  } else {
    return { success: false, error: result.error.message };
  }
}
