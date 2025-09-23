'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import { LogOut, User, BarChart3 } from 'lucide-react'

export default function Header() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push('/login')
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">FinTrack Hub</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/market"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Market
            </Link>
            <Link
              href="/news"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              News
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/watchlist"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Watchlist
            </Link>
          </nav>

          {user && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span className="text-sm">{user.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
