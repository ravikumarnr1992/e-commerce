import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASEURL, import.meta.env.VITE_SUPABASEKEY);

export default supabase;
