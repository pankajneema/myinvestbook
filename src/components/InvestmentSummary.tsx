import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const InvestmentSummary = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Investment Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="equities">
          <TabsList>
            <TabsTrigger value="equities">Equities</TabsTrigger>
            <TabsTrigger value="sips">SIPs</TabsTrigger>
            <TabsTrigger value="mutualfunds">Mutual Funds</TabsTrigger>
          </TabsList>
          <TabsContent value="equities">Equities content here</TabsContent>
          <TabsContent value="sips">SIPs content here</TabsContent>
          <TabsContent value="mutualfunds">Mutual Funds content here</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default InvestmentSummary