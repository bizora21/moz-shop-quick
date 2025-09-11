import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Simplified for now - just redirect to login
  // TODO: Implement proper auth checking when Supabase is configured
  const isAuthenticated = false // Temporarily disabled until Supabase is properly configured

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute