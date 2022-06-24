import { useState } from "react"
import { Avatar, Backdrop, Button, Select, MenuItem, Box, TextField } from "@mui/material"
import Retailer from './Retailer'

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
    const [product, setProduct] = useState(products[0].product_name);
    const [quantity, setQuantity] = useState(1);
    console.log(product + quantity);
    const selectedProduct = products.find(e => e.product_name == product);
    console.log(selectedProduct?.product_price);
    const [user, setUser] = useState(0);
    const [Stock, setStock] = useState<StockInHand>(products);
    const [retailer, setRetailer] = useState<Cus[] | null | []>(customer);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const displayOverlay: displayOverlay = (i) => {
        setOpen(!open);
        console.log(i);
        setUser(i);
    }

    return (
        <div>
            <div className="header">
                <span className="header-text">DHS Mart</span>
                <span className="header-button">
                    <Button variant="contained" size="small" onClick={() => displayOverlay(0)}>Retailer 1</Button>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(1)}>Retailer 2</Button>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(2)}>Retailer 3</Button>
                    <Backdrop
                        sx={{ color: '#fff' }}
                        open={open}
                    >
                        <Box sx={{ color: 'black', width: '700px', height: '250px', backgroundColor: 'white' }}>
                            <div className='box-header'>
                                <Avatar sx={{ margin: '10px', bgcolor: 'tomato' }}>
                                    {customer[user].name[0]}
                                </Avatar>
                                <p className="cus-name">{customer[user].name}, {customer[user].address}</p>
                            </div>
                            <div className="cus-cart">
                                <div></div>
                                Product: <Select
                                    defaultChecked
                                    defaultValue={products[0].product_name}
                                    sx={{ minWidth: 120, margin: '0 10px' }}
                                    size="small"
                                    onChange={(e) => setProduct(e.target.value)}
                                >
                                    {
                                        products.map(item => <MenuItem key={item.product_id} value={item.product_name}>{item.product_name}</MenuItem>)
                                    }
                                </Select>
                                <span>Price: {product && selectedProduct?.product_price} Rps/-</span>
                                Quantity: <TextField
                                    inputProps={{
                                        pattern: '[0-9]*',
                                        min:1,
                                        max:100
                                    }}
                                    type="number"
                                    size="small"
                                    sx={{ maxWidth: 120, margin: '0 10px' }}
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={e=>setQuantity(parseInt(e.target.value))}
                                />
                                <span>Total: {product && selectedProduct && quantity * selectedProduct.product_price} Rps/-</span>
                                <Button
                                    variant="outlined"
                                >
                                    Add
                                </Button>
                            </div>
                            <div className="cus-action">
                                <Button
                                    variant="contained"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                            </div>
                        </Box>
                    </Backdrop>
                </span>
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