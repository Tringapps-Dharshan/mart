import { Avatar } from "@mui/material"
import { retailerprops } from '../typescript/type'

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
      <div className={details.products.length === 0 ? "orders" : "display-orders"}>
        {
          details.products.length > 0 ? details.products.map(data => <div key={data.id}><div>Product Name : {data.name} </div><div>No. of Quantity : {data.quantity}</div></div>) : <span>No Orders</span>
        }
      </div>
    </div>
  )
}

export default RetailerDetails