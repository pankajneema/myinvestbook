'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import PortfolioOverview from '@/components/PortfolioOverview'
import InvestmentSummary from '@/components/InvestmentSummary'
import AddDematAccount from '@/components/AddDematAccount'

export default function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/auth')
  //   }
  // }, [user, router])

  // if (!user) {
  //   return null // or a loading spinner
  // }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <PortfolioOverview />
      <InvestmentSummary />
      <AddDematAccount />
    </div>
  )
}