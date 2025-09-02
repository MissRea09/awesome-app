import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;

const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key loaded:", !!supabaseAnonKey);


if (!supabaseUrl || !supabaseAnonKey) {
  // This helps catch env issues early during dev
  // (Won't crash your app)
  console.warn("Missing Supabase env vars. Check .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
