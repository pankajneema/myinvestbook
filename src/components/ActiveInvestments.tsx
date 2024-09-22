'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const ActiveInvestments = () => {
  const [investments, setInvestments] = useState([
    { id: 1, name: 'AAPL', type: 'Stock', quantity: 10, averagePrice: 150, currentPrice: 155 },
    { id: 2, name: 'GOOGL', type: 'Stock', quantity: 5, averagePrice: 2000, currentPrice: 2100 },
    { id: 3, name: 'SIP Fund', type: 'SIP', amount: 5000, frequency: 'Monthly' },
  ])

  const handleModify = (id: number) => {
    // Implement modify logic
    console.log('Modify investment', id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Investments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Quantity/Amount</TableHead>
              <TableHead>Average Price</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell>{investment.name}</TableCell>
                <TableCell>{investment.type}</TableCell>
                <TableCell>{investment.quantity || investment.amount}</TableCell>
                <TableCell>{investment.averagePrice || '-'}</TableCell>
                <TableCell>{investment.currentPrice || '-'}</TableCell>
                <TableCell>
                  <Button onClick={() => handleModify(investment.id)}>Modify</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ActiveInvestments