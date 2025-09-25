'use client'

import SignupForm from '@/components/auth/SignupForm'

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">FinTrack Hub</h1>
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Create your account</h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignupForm />

          <div className="mt-6 text-center">
            <button
              onClick={() => (window.location.href = '/login')}
              className="text-sm font-semibold text-black"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <span style={{ color: '#000' }}>Already have an account? </span>
              <span style={{ color: '#2563eb', textDecoration: 'underline' }}>Log in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
