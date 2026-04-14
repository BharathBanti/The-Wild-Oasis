import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qtwcsaxovzkoehwmjqvp.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0d2NzYXhvdnprb2Vod21qcXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyOTU0NzksImV4cCI6MjA5MDg3MTQ3OX0.BjbkkFg6baIyLzx4j86tTWqQtcF-F_7rDaqTEv4eKp0';

export const supabase = createClient(supabaseUrl, supabaseKey);