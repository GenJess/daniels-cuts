import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bymzpajiewfzsbbxrzun.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5bXpwYWppZXdmenNiYnhyenVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NDA4MzUsImV4cCI6MjA2MTIxNjgzNX0.kExBbYt778cyzN4fAWO8kdQOjHW5SnMeu0-xUf0RXZ0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
