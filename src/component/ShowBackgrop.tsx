import { useState } from 'react'
import { Avatar, Backdrop, Button, Select, MenuItem, Box, TextField } from "@mui/material"
import { Cus, props, StockInHand } from '../typescript/type'

type handleClose = () => void

function ShowBackgrop({ Stock, Retailer, user, open, setOpen, setStock, setRetailer }: props) {
    const handleClose: handleClose = () => {
        setOpen(false);
    };

    const handleStock = (editProduct: StockInHand, currentUser: Cus) => {
        console.log(editProduct);
        console.log(currentUser);

        editProduct.product_inStock = editProduct.product_inStock - quantity;
        setStock([{...editProduct }]);
        currentUser.products.push({ name: product, quantity: quantity });
        
        setRetailer([{ ...currentUser }]);
        setQuantity(0);
        handleClose();
        console.log(Stock);
        console.log(Retailer);
    }
    const [product, setProduct] = useState(Stock[0].product_name);
    const [quantity, setQuantity] = useState(0);
    const selectedProduct = Stock.find(e => e.product_name === product);
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
                <form>
                    <div className='box-content'>
                        <div className='content'>
                            <Select
                                defaultChecked
                                defaultValue={product}
                                sx={{ minWidth: 120 }}
                                size="small"
                                onChange={(e) => setProduct(e.target.value)}
                            >
                                {
                                    Stock.map(item => <MenuItem key={item.product_id} value={item.product_name}>{item.product_name}</MenuItem>)
                                }
                            </Select>
                        </div>
                        <div className='content'>
                            <p>{product && selectedProduct?.product_price}</p>
                        </div>
                        <div className='content'>
                            <TextField
                                type="number"
                                size="small"
                                sx={{ maxWidth: 120, margin: '0 10px' }}
                                value={quantity}
                                onChange={e => setQuantity(parseInt(e.target.value))}
                            />
                        </div>
                        <div className='content'>
                            <p>{quantity === 0 ? "-" : product && selectedProduct && quantity * selectedProduct.product_price}</p>
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
                </form>
                <div className="cus-action">
                    {
                        selectedProduct &&
                        <Button
                            variant="contained"
                            onClick={() => handleStock(selectedProduct, Retailer[user])}
                        >
                            Supply
                        </Button>
                    }
                </div>
            </Box>
        </Backdrop >
    )
}


export default ShowBackgrop;