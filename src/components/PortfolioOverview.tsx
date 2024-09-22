import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PortfolioOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-sm text-gray-500">Total Value</h3>
            <p className="text-2xl font-bold">₹1,234,567</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-500">Today's Gain/Loss</h3>
            <p className="text-2xl font-bold text-green-600">+₹12,345</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-500">Overall Return</h3>
            <p className="text-2xl font-bold text-green-600">+15.67%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PortfolioOverview