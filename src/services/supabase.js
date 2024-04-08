import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://kyzdjeyfogokvvsakbho.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5emRqZXlmb2dva3Z2c2FrYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMDI1OTMsImV4cCI6MjAyNzg3ODU5M30.CGbcHoB4EOWwzogSICexd8W3ctS3GGTDUJqmOENtZDE";

const supabase = createClient(import.meta.env.VITE_SUPABASEURL, import.meta.env.VITE_SUPABASEKEY);

export default supabase;
