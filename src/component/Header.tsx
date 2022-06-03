import { useState } from "react"
import { Backdrop, Button } from "@mui/material"
import Retailer1 from "./Retailer1"
import Retailer2 from "./Retailer2"
import Retailer3 from "./Retailer3"
type StockInHand = {
    product_id: number,
    product_name: string,
    product_price: number,
    product_inStock: number
}[]

type martStock = {
    Stock: StockInHand,
    setStock: (set: StockInHand) => void
}

type retailerStock = {
    retailer: product,
    setReatiler: (set: product) => void
}

type displayOverlay = (i: number) => void

type product={
    name:string,
    quantity:number
}[]

type Cus={
    id:number,
    name:string,
    products:product,
    address:string
}

type retail={
    re1:Cus,
    re2:Cus,
    re3:Cus
}

function Header() {
    const customer:retail={
        re1:{
            id:1,
            name:'Karthick',
            products:[],
            address:'Madurai'
        },
        re2:{
            id:2,
            name:'Dharshan',
            products:[],
            address:'Madurai'
        },
        re3:{
            id:3,
            name:'Bhavesh',
            products:[],
            address:'Madurai'
        }
      }
    const products: StockInHand = [{
        product_id: 1,
        product_name: 'Milk',
        product_price: 15,
        product_inStock: 20
    },
    {
        product_id: 2,
        product_name: 'Bread',
        product_price: 15,
        product_inStock: 20
    },
    {
        product_id: 3,
        product_name: 'Jam',
        product_price: 15,
        product_inStock: 20
    }
    ];
    
    const [Stock, setStock] = useState<StockInHand>(products);
    const [retailer,setRetailer] = useState<retail>(customer);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const displayOverlay = (i: number) => {
        setOpen(!open);
        console.log(i);
    }
    return (
        <div>
            <div className="header">
                <span className="header-text">DHS Mart</span>
                <span className="header-button">
                    <Button variant="contained" size="small" onClick={() => displayOverlay(1)}>Retailer 1</Button>
                    <Backdrop
                        sx={{ color: '#fff' }}
                        open={open}
                        onClick={handleClose}
                    >
                        hi
                    </Backdrop>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(1)}>Retailer 2</Button>
                    <Backdrop
                        sx={{ color: '#fff' }}
                        open={open}
                        onClick={handleClose}
                    >
                        hi
                    </Backdrop>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(1)}>Retailer 3</Button>
                    <Backdrop
                        sx={{ color: '#fff' }}
                        open={open}
                        onClick={handleClose}
                    >
                        hi
                    </Backdrop>
                </span>
            </div>
            <div className="retail">
                <div className='part'>
                    <Retailer1 details={customer.re1}/>  
                </div>
                <div className='part'>
                    <Retailer2 details={customer.re2}/>
                </div>
                <div className='part'>
                    <Retailer3 details={customer.re3}/>
                </div>
            </div>
        </div>
    )
}

export default Header