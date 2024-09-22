'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const HotStocksList = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: 'AAPL', price: 155, change: 2.5 },
    { id: 2, name: 'GOOGL', price: 2100, change: -1.2 },
    { id: 3, name: 'MSFT', price: 300, change: 1.8 },
  ])

  const handleBuy = (id: number) => {
    // Implement buy logic
    console.log('Buy stock', id)
  }

  const handleSell = (id: number) => {
    // Implement sell logic
    console.log('Sell stock', id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Stocks</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.id}>
                <TableCell>{stock.name}</TableCell>
                <TableCell>₹{stock.price}</TableCell>
                <TableCell className={stock.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {stock.change > 0 ? '+' : ''}{stock.change}%
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleBuy(stock.id)} className="mr-2">Buy</Button>
                  <Button onClick={() => handleSell(stock.id)} variant="outline">Sell</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default HotStocksList