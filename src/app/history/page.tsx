'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function History() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-06-01', type: 'Buy', stock: 'AAPL', quantity: 10, price: 150 },
    { id: 2, date: '2023-06-02', type: 'Sell', stock: 'GOOGL', quantity: 5, price: 2500 },
    { id: 3, date: '2023-06-03', type: 'Buy', stock: 'MSFT', quantity: 15, price: 300 },
  ])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.stock}</TableCell>
                  <TableCell>{transaction.quantity}</TableCell>
                  <TableCell>₹{transaction.price.toFixed(2)}</TableCell>
                  <TableCell>₹{(transaction.quantity * transaction.price).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}