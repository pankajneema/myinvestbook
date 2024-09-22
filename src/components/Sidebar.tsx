'use client'

import Link from 'next/link'
import { HomeIcon, BarChart3Icon, TrendingUpIcon, HistoryIcon, LogOutIcon } from 'lucide-react'
import { useAuth } from './AuthProvider'

const Sidebar = () => {
  const { logout } = useAuth()

  return (
    <div className="w-64 bg-white h-full shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Stock Panel</h1>
      </div>
      <nav className="mt-6">
        <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
          <HomeIcon className="inline-block w-5 h-5 mr-2" />
          Dashboard
        </Link>
        <Link href="/investments" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
          <BarChart3Icon className="inline-block w-5 h-5 mr-2" />
          Investments
        </Link>
        <Link href="/hot-stocks" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
          <TrendingUpIcon className="inline-block w-5 h-5 mr-2" />
          Hot Stocks
        </Link>
        <Link href="/history" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
            <HistoryIcon className="inline-block w-5 h-5 mr-2" />
          Transaction History
        </Link>
        <button onClick={logout} className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
          <LogOutIcon className="inline-block w-5 h-5 mr-2" />
          Logout
        </button>
      </nav>
    </div>
  )
}

export default Sidebar