// src/lib/supabase/auth.ts
'use client'

import { supabase } from './client'
import { User } from '@supabase/supabase-js'

export const authService = {
    signUp: async (email: string, password: string, fullName?: string) => {
      const trimmedEmail = email.trim()
  
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password
      })
  
      if (data.user && fullName) {
        await supabase
          .from('profiles')
          .insert({ id: data.user.id, full_name: fullName })
      }
  
      return { user: data.user, error }
    },
  
    signIn: async (email: string, password: string) => {
      const trimmedEmail = email.trim()
  
      const { data, error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password
      })
      return { user: data.user, error }
    },
  
    signOut: async () => {
      return await supabase.auth.signOut()
    },
  
    getCurrentUser: async (): Promise<{ user: User | null }> => {
      const { data } = await supabase.auth.getUser()
      return { user: data.user ?? null }
    },
  
    getCurrentSession: async () => {
      const { data } = await supabase.auth.getSession()
      return data
    }
  }
  
