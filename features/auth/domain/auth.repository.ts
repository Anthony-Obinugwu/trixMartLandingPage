import { Result } from '@/lib/core/result';
import { LoginCredentials, Profile, SignupPayload } from './types';

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<Result<Profile, Error>>;
  signup(payload: SignupPayload): Promise<Result<Profile, Error>>;
  logout(): Promise<Result<void, Error>>;
  getCurrentUser(): Promise<Result<Profile | null, Error>>;
  deleteAccount(password: string): Promise<Result<void, Error>>;
}
