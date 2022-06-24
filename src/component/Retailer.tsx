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


function Retailer({details}:Status) {
  return (
    <div className='retailer-header'>
        {details.name}<br/>
        {details.address}
        {details.products.length ? "Hi" : "No products to display"}
    </div>
  )
}

export default Retailer