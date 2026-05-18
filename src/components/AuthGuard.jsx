import { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import supabase from '../lib/supabase'

export function AuthGuard({ children }) {
  const [authState, setAuthState] = useState('loading')
  const location = useLocation()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setAuthState('authenticated')
      } else {
        setAuthState('unauthenticated')
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setAuthState('authenticated')
        } else {
          setAuthState('unauthenticated')
        }
      }
    )

    return () => listener.subscription.unsubscribe()
  }, [])

  if (authState === 'loading') {
    return (
      <div style={{
        height: '100vh',
        background: '#080501',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
      }}>
        <div style={{
          width: 50, height: 50, borderRadius: '50%',
          background: 'radial-gradient(circle, #E8A820, #6A3800)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24, fontFamily: 'Georgia, serif', color: '#080501'
        }}>ኢ</div>
        <div style={{
          color: '#D4A017', fontFamily: 'sans-serif',
          fontSize: 13, letterSpacing: 1
        }}>Loading Ethiopia Language AI...</div>
      </div>
    )
  }

  if (authState === 'unauthenticated') {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}
