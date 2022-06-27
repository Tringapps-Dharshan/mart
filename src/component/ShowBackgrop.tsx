import { useState } from 'react'
import { Avatar, Backdrop, Button, Select, MenuItem, Box, TextField, FormControl } from "@mui/material"
import { Cus, props, StockInHand } from '../typescript/type'
import { v4 as id } from 'uuid';
type handleClose = () => void

function ShowBackgrop({ Stock, Retailer, user, open, setOpen }: props) {
    const handleClose: handleClose = () => {
        setOpen(false);
    };
    const handleStock = (editProduct: StockInHand, currentUser: Cus) => {
        const updateStock: any = Stock.find((item) => item.product_id === editProduct.product_id);
        updateStock.product_inStock -= quantity;
        currentUser.products.push({ id: id(), name: product, quantity: quantity });
        setQuantity(1);
        handleClose();
    }
    const [product, setProduct] = useState<string>(Stock[0].product_name);
    const [quantity, setQuantity] = useState<number>(1);
    const selectedProduct = Stock.find(e => e.product_name === product);
    const quanInStock = selectedProduct?.product_inStock;
    return (
        <Backdrop
            sx={{ color: '#fff' }}
            open={open}
        >
            <Box sx={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }}>
                <div className='box-header'>
                    <Avatar sx={{ margin: '10px', bgcolor: 'tomato' }}>
                        {Retailer[user].name[0]}
                    </Avatar>
                    <p className="cus-name">{Retailer[user].name}, {Retailer[user].address}.</p>
                </div>
                <FormControl>
                    <div className='box-content'>
                        <div className='content'>
                            <label>Product</label><br/>
                            <Select
                                value={product}
                                title="Select product to add"
                                sx={{ minWidth: 120 }}
                                size="small"
                                onChange={(e) => setProduct(e.target.value)}
                                required
                            >
                                {
                                    Stock.map(item => <MenuItem key={item.product_id} value={item.product_name} disabled={item.product_inStock === 0 ? true : false}>{item.product_name}</MenuItem>)
                                }
                            </Select>
                        </div>
                        <div className='content'>
                            <p title="price of the product">{product && selectedProduct?.product_price}</p>
                        </div>
                        <div className='content'>
                            <TextField
                                type="number"
                                InputProps={{
                                    inputProps: { min: 1, max: quanInStock, placeholder: 'Quantity' }
                                }}
                                required
                                title='Enter Quantity'
                                size="small"
                                sx={{ maxWidth: 120, margin: '0 10px' }}
                                onChange={e => setQuantity(parseInt(e.target.value))}
                            />
                        </div>
                        <div className='content'>
                            <p>{quantity === 0 ? "-" : product && selectedProduct && quantity * selectedProduct.product_price}</p>
                        </div>
                    </div>
                    <div className="cus-action">
                        {
                            selectedProduct &&
                            <Button
                                type='submit'
                                variant="contained"
                                disabled={quantity === 0 ? true : false}
                                onClick={() => handleStock(selectedProduct, Retailer[user])}
                            >
                                Supply
                            </Button>
                        }
                        <Button
                            variant="contained"
                            sx={{ margin: '10px' }}
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </div>
                </FormControl>
            </Box>
        </Backdrop >
    )
}


export default ShowBackgrop;