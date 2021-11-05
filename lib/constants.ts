export const NEXT_PUBLIC_SUPABASE_URL = process.env.SUPABASE_URL
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

export const DEFAULT_AVATARS_BUCKET = 'avatars'

export type Profile = {
  id: string
  avatar_url: string
  username: string
  website: string
  updated_at: string
}

