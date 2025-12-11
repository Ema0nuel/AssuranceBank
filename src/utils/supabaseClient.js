import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mhfsozcgivadqtmvurmh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZnNvemNnaXZhZHF0bXZ1cm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTQwOTgsImV4cCI6MjA4MDk3MDA5OH0.dixsEwnuKq3K57igqA8S6Xm2-dE73U2oNNFQyb25H4g";
export const supabase = createClient(supabaseUrl, supabaseKey);

export const RESEND_API_KEY = "re_XMLukbfe_AxrbiaaLSZSSwRxo3FR8MAVc";





