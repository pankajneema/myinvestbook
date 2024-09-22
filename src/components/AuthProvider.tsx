'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthContext = createContext<{
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
} | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in (e.g., by checking local storage)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email: string, password: string) => {
    // Here you would typically make an API call to authenticate the user
    const fakeUser = { id: 1, name: 'John Doe', email }
    setUser(fakeUser)
    localStorage.setItem('user', JSON.stringify(fakeUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/auth')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider