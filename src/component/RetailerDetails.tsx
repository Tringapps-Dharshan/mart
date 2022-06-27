import { Avatar } from "@mui/material"
import {retailerprops} from '../typescript/type'

function RetailerDetails({ details }: retailerprops) {
  return (
    <div>
      <div className='retailer-header'>
        <Avatar
          sx={{ background: 'blueviolet', color: 'white', marginRight: '10px' }}
        >
          {details.name[0]}
        </Avatar>
        <p>{details.name}, {details.address}.</p>
      </div>
      <div className={details.products.length ===0 ? "orders" : "display-orders"}>
        {
          details.products.length>0 ? details.products.map(data => <p key={data.id}>Product Name : {data.name} <br/> No. of Quantity : {data.quantity}</p>) : <p>No products to display</p>
        }
      </div>
    </div>
  )
}

export default RetailerDetails