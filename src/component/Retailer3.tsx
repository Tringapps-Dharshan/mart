import React from 'react'
type product = {
  name: string,
  quantity: number
}[]

type Cus = {
  id: number,
  name: string,
  products: product,
  address: string
}

type Status = {
  details : Cus
}

function Retailer3({details}:Status) {
  return (
    <div className='retailer-header'>
      <span>{details.name}</span>
      <span>{details.address}</span>
    </div>
  )
}

export default Retailer3