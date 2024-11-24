import { createClient } from '@supabase/supabase-js'

// 環境変数の確認
// console.log("Supabase URL of creCla:", process.env.VITE_SUPABASE_URL);
// console.log("Supabase ANON KEY of creCla:", process.env.VITE_SUPABASE_ANON_KEY);

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
)
