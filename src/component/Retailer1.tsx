import Avatar from '@mui/material/Avatar';
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

function Retailer1({details}:Status) {
  return (
    <div className='retailer-header'>
        <Avatar>{details.name[0]}</Avatar>
        {details.name}
        {details.address}
    </div>
  )
}

export default Retailer1