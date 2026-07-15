import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration missing: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in the project root .env file.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
