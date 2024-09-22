'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AddDematAccount = () => {
  const [formData, setFormData] = useState({
    companyname: '',
    AccountType: '',
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
        <CardTitle>Add New Demat Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select name="companyname" onValueChange={(value) => setFormData(prev => ({ ...prev, companyname: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select investment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Groww">Groww</SelectItem>
              <SelectItem value="AngelOne">Angel One</SelectItem>
              <SelectItem value="Upstox">	Upstox</SelectItem>
              <SelectItem value="PaytmMoney">Paytm Money</SelectItem>
              <SelectItem value="ICICIdirect">	ICICIdirect</SelectItem>
              <SelectItem value="Zerodha">Zerodha</SelectItem>
              <SelectItem value="KotakSecurities">	Kotak Securities	</SelectItem>
            </SelectContent>
          </Select>
          <Select name="AccountType" onValueChange={(value) => setFormData(prev => ({ ...prev, AccountType: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select Account Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ExistingAccount">Existing Account</SelectItem>
              <SelectItem value="NewAccount">New Account</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit">Add Account</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddDematAccount