import { createClient } from '@supabase/supabase-js';

// Tenta obter as variáveis do formato Vite ou do formato Next.js usado na Vercel
const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 
  '';

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);