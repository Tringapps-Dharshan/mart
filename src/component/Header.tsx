import { useState } from "react"
import { Button } from "@mui/material"
import Retailer from './Retailer'
import ShowBackgrop from "./ShowBackgrop"
import { StockInHand, Cus, displayOverlays} from '../typescript/type'

function Header() {
    const customer: Cus[] = [
        {
            id: 1,
            name: 'Karthick',
            products: [],
            address: 'Madurai'
        },
        {
            id: 2,
            name: 'Dharshan',
            products: [],
            address: 'Madurai'
        },
        {
            id: 3,
            name: 'Bhavesh',
            products: [],
            address: 'Madurai'
        }
    ];
    const products: StockInHand = [{
        product_id: 1,
        product_name: 'Milk 1 Litre',
        product_price: 48,
        product_inStock: 20
    },
    {
        product_id: 2,
        product_name: 'Bread',
        product_price: 30,
        product_inStock: 20
    },
    {
        product_id: 3,
        product_name: 'Jam',
        product_price: 20,
        product_inStock: 20
    }
    ];
    const displayOverlay: displayOverlays = (i) => {
        setOpen(!open);
        console.log(i);
        setUser(i);
    }

    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<number>(0);
    const [Stock, setStock] = useState<StockInHand>(products);
    const [retailer, setRetailer] = useState<Cus[] | null | []>(customer);

    return (
        <div>
            <div className="header">
                <div className="header-text">DHS Mart</div>
                <div>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(0)} sx={{ margin: '10px' }}>Retailer 1</Button>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(1)} sx={{ margin: '10px' }}>Retailer 2</Button>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(2)} sx={{ margin: '10px' }}>Retailer 3</Button>
                    <ShowBackgrop products={products} customer={customer} user={user} open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className="retail">
                {
                    customer.map(i =>
                        <div className='part' key={i.id}>
                            <Retailer details={i} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header