import { Avatar } from "@mui/material"

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
  details: Cus
}


function Retailer({ details }: Status) {
  return (
    <div>
      <div className='retailer-header'>
        <Avatar
          sx={{ background: 'blueviolet', color: 'white', marginRight: '10px' }}
        >
          {details.name[0]}
        </Avatar>
        {details.name}, {details.address}.
      </div>
      {details.products.length ? "Hi" : "No products to display"}
    </div>
  )
}

export default Retailer