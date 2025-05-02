import React from 'react'
import CardDetails from '../../components/card/cardDetails'

const NewArrival = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <div className="mb-8">
      <h1 className="text-3xl font-semibold">New Arrival</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
    </div>
  </div>
  )
}

export default NewArrival