// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Reads the variables from .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!; // LOOKS FOR THE RENAMED KEY

// Public client for reading data
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for writing data (likes, subscribers, etc.)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
