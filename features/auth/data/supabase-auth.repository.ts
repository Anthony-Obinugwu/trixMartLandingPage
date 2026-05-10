import { createClient } from '@/lib/supabase/server';
import { Result, success, failure } from '@/lib/core/result';
import { IAuthRepository } from '../domain/auth.repository';
import { LoginCredentials, Profile, SignupPayload } from '../domain/types';
import { SupabaseClient } from '@supabase/supabase-js';

export class SupabaseAuthRepository implements IAuthRepository {
  private async getClient() {
    return createClient();
  }

  async login(credentials: LoginCredentials): Promise<Result<Profile, Error>> {
    try {
      const supabase = await this.getClient();
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password || '',
      });

      if (authError) return failure(authError);
      if (!authData.user) return failure(new Error('User not found after login'));

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (profileError) return failure(profileError);
      return success(profile as Profile);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error(String(error)));
    }
  }

  async signup(payload: SignupPayload): Promise<Result<Profile, Error>> {
    try {
      const supabase = await this.getClient();
      
      // 1. Sign up the user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password || '',
        options: {
          data: {
            firstname: payload.firstname,
            lastname: payload.lastname,
            username: payload.username,
          }
        }
      });

      if (authError) return failure(authError);
      if (!authData.user) return failure(new Error('Signup failed: No user returned'));

      // 2. Create the profile in the profiles table
      // Note: Usually this is handled by a DB trigger, but the user asked for business logic.
      // However, if there's a trigger, this might fail or be redundant.
      // Given the prompt's schema, we'll perform the insert.
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          firstname: payload.firstname,
          lastname: payload.lastname,
          username: payload.username,
          email: payload.email,
          school_id: payload.school_id,
          roles: [payload.role],
          metadata: {},
        })
        .select('*')
        .single();

      if (profileError) {
        // If profile creation fails, we might want to delete the auth user? 
        // For now, return failure.
        return failure(profileError);
      }

      return success(profile as Profile);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error(String(error)));
    }
  }

  async logout(): Promise<Result<void, Error>> {
    try {
      const supabase = await this.getClient();
      const { error } = await supabase.auth.signOut();
      if (error) return failure(error);
      return success(undefined);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error(String(error)));
    }
  }

  async getCurrentUser(): Promise<Result<Profile | null, Error>> {
    try {
      const supabase = await this.getClient();
      const { data: { user }, error: authError } = await supabase.auth.getUser();

      if (authError) return failure(authError);
      if (!user) return success(null);

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) return failure(profileError);
      return success(profile as Profile);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error(String(error)));
    }
  }
}
