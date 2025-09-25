'use client'

import { useState } from 'react'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">FinTrack Hub</h1>
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Log in to your account</h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />

          <div className="mt-6 text-center">
            <button
              onClick={() => (window.location.href = '/signin')}
              className="text-sm font-semibold text-black"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <span style={{ color: '#000' }}>Don&apos;t have an account? </span>
              <span style={{ color: '#2563eb', textDecoration: 'underline' }}>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
