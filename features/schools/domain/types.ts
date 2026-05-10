export interface School {
  id: string;
  name: string;
  logo_url: string;
  primary_color: string | null;
  secondary_color: string | null;
  campus_map_url: string | null;
  created_at: string;
  code: string;
  allowed_email_domains: string[];
  is_open_registration: boolean;
}
