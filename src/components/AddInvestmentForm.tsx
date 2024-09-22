'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AddInvestmentForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    quantity: '',
    price: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic
    console.log('Form submitted', formData)
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Add New Investment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select name="type" onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select investment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stock">Stock</SelectItem>
              <SelectItem value="sip">SIP</SelectItem>
              <SelectItem value="mutualfund">Mutual Fund</SelectItem>
            </SelectContent>
          </Select>
          <Input name="name" placeholder="Investment Name" onChange={handleChange} />
          <Input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} />
          <Input name="price" type="number" placeholder="Price" onChange={handleChange} />
          <Button type="submit">Add Investment</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddInvestmentForm