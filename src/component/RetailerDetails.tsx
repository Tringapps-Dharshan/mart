import { Avatar } from "@mui/material"
import {retailerprops} from '../typescript/type'

function Retailer({ details }: retailerprops) {
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
      <div>
        <p>Ordered</p>
        <p>{JSON.stringify(details.products)}</p>
        {
          details.products.length>0 ? details.products.map(data => <p>{data.name} - {data.quantity}</p>) : <p>No Orders</p>
        }
      </div>
    </div>
  )
}

export default Retailer