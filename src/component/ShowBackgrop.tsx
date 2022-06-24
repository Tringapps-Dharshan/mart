import React, { useState } from 'react'
import { Avatar, Backdrop, Button, Select, MenuItem, Box, TextField } from "@mui/material"
import { props } from '../typescript/type'

type handleClose = () => void

function ShowBackgrop({ products, customer, user, open, setOpen }: props) {
    const handleClose: handleClose = () => {
        setOpen(false);
    };
    const [product, setProduct] = useState(products[0].product_name);
    const [quantity, setQuantity] = useState(0);
    console.log(product + quantity);
    const selectedProduct = products.find(e => e.product_name === product);
    console.log(selectedProduct?.product_price);
    return (
        <Backdrop
            sx={{ color: '#fff' }}
            open={open}
        >
            <Box sx={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }}>
                <div className='box-header'>
                    <Avatar sx={{ margin: '10px', bgcolor: 'tomato' }}>
                        {customer[user].name[0]}
                    </Avatar>
                    <p className="cus-name">{customer[user].name}, {customer[user].address}.</p>
                </div>
                <div className='box-content'>
                    <div className='content'>
                        <Select
                            defaultChecked
                            defaultValue={products[0].product_name}
                            sx={{ minWidth: 120 }}
                            size="small"
                            onChange={(e) => setProduct(e.target.value)}
                        >
                            {
                                products.map(item => <MenuItem key={item.product_id} value={item.product_name}>{item.product_name}</MenuItem>)
                            }
                        </Select>
                    </div>
                    <div className='content'>
                        <p>{product && selectedProduct?.product_price}</p>
                    </div>
                    <div className='content'>
                        <TextField
                            inputProps={{
                                pattern: '[0-9]*',
                                min: 0,
                                max: 100,
                                title: 'Enter valid quantity.'
                            }}
                            type="number"
                            size="small"
                            sx={{ maxWidth: 120, margin: '0 10px' }}
                            value={quantity}
                            onChange={e => setQuantity(parseInt(e.target.value))}
                        />
                    </div>
                    <div className='content'>
                        <p>{quantity===0 ? "-" : product && selectedProduct && quantity * selectedProduct.product_price}</p>
                    </div>
                    <div className='content'>
                        <Button
                            variant="contained"
                            sx={{ margin: '10px' }}
                        >
                            Add
                        </Button>
                    </div>
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
        </Backdrop >
    )
}


export default ShowBackgrop;