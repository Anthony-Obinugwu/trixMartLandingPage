export interface Profile {
  id: string;
  firstname: string;
  lastname: string;
  username: string | null;
  email: string;
  school_id: string;
  avatar_url: string | null;
  phone_number: string | null;
  roles: string[];
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string | null;
  last_seen: string;
  deleted_at: string | null;
}

export interface SignupPayload {
  email: string;
  password?: string;
  firstname: string;
  lastname: string;
  username: string;
  school_id: string;
  role: 'buyer' | 'seller';
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface AuthSession {
  user: Profile | null;
  session: any; // Using any for Supabase Session type here to avoid importing
}
