import ActiveInvestments from '@/components/ActiveInvestments'
import AddInvestmentForm from '@/components/AddInvestmentForm'

export default function Investments() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Investments</h1>
      <ActiveInvestments />
      <AddInvestmentForm />
    </div>
  )
}