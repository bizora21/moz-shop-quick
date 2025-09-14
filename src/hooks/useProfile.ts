import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from './useAuth'

interface Profile {
  id: string
  user_id: string
  full_name?: string
  phone?: string
  avatar_url?: string
  email_verified: boolean
  created_at: string
  updated_at: string
}

export const useProfile = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setProfile(null)
      setLoading(false)
      return
    }

    fetchProfile()
  }, [user])

  const fetchProfile = async () => {
    if (!user) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
        return
      }

      setProfile(data)
    } catch (error) {
      console.error('Error in fetchProfile:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user || !profile) return { error: new Error('No user or profile') }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()

      if (error) {
        return { error }
      }

      setProfile(data)
      return { data, error: null }
    } catch (error) {
      return { error }
    }
  }

  const createProfile = async (profileData: Partial<Profile>) => {
    if (!user) return { error: new Error('No user') }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          user_id: user.id,
          ...profileData
        })
        .select()
        .single()

      if (error) {
        return { error }
      }

      setProfile(data)
      return { data, error: null }
    } catch (error) {
      return { error }
    }
  }

  return {
    profile,
    loading,
    updateProfile,
    createProfile,
    refreshProfile: fetchProfile
  }
}