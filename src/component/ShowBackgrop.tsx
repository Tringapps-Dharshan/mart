import { useState } from 'react'
import { Alert, Avatar, Backdrop, Button, Select, MenuItem, Box, TextField } from "@mui/material"
import { Cus, props, StockInHand } from '../typescript/type'
import { v4 as id } from 'uuid';
import { useForm, useFieldArray, Controller, useWatch } from 'react-hook-form';

type handleClose = () => void

function ShowBackgrop({ Stock, Retailer, user, open, setOpen }: props) {

    const [error, setError] = useState(false);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { register, control, handleSubmit, watch } = useForm({
        defaultValues: {
            data: [{ product: "", quantity: 1 }]
        }
    });

    const watchResult = watch("data");

    // The following is useWatch example
    //console.log(watchResult);
    //console.log(useWatch({ name: "data", control }));


    const menu: StockInHand[] = Stock.filter(element => element.product_inStock !== 0);
    const selectedProduct = product && Stock.find(e => e.product_name === product);
    const quanInStock = selectedProduct && selectedProduct?.product_inStock;
    const { fields, append, remove } = useFieldArray({
        control,
        name: "data"
    });

    const handleClose: handleClose = () => {
        setQuantity(1);
        setProduct('');
        setOpen(false);
    };

    const handleStock = (currentUser: Cus) => {
        if (product.length !== 0) {
            setError(false)
            const updateStock: StockInHand | undefined | "" = selectedProduct && Stock.find((item) => item.product_id === selectedProduct.product_id);
            if (updateStock) {
                updateStock.product_inStock -= quantity
            }
            watchResult.forEach((data) => {
                currentUser.products.push({ 'id': id(), 'name': data.product, 'quantity': data.quantity })
            })
            console.log(Retailer);

            //currentUser.products.push({ id: id(), name: product, quantity: quantity });

            setQuantity(1);
            setProduct('');
            handleClose();
        } else {
            setError(true);
        }
    }

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
                <div className='box-info'>
                    <p>Add your products here.</p>
                </div>
                <form onSubmit={handleSubmit(() => handleStock(Retailer[user]))}>
                    <div>
                        {fields.map((item, index) => {
                            return (
                                <div key={item.id} className='box-content'>
                                    <div className='content'>
                                        <p className='box-title'>Select Product</p>
                                        <select
                                            {...register(`data.${index}.product`)}
                                            value={product}
                                            onChange={(e) => setProduct(e.target.value)}
                                            
                                        >
                                            <option disabled value="">SELECT</option>
                                            {
                                                menu.map(items => <option key={items.product_id} value={items.product_name}>{items.product_name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className='content'>
                                        <p className='box-title'>Price</p>
                                        <p>{product.length === 0 && "-"}</p>
                                        <p>{product && selectedProduct && selectedProduct?.product_price}</p>
                                    </div>
                                    <div className='content'>
                                        <p className='box-title'>Custom Quantity</p>
                                        <Controller
                                            render={({ field }) =>
                                                <input {...field}
                                                    value={quantity}
                                                    type="number"
                                                    min="1"
                                                    max={quanInStock}
                                                    onChange={e => setQuantity(parseInt(e.target.value))}
                                                    disabled={product.length == 0 ? true : false}
                                                />}
                                            name={`data.${index}.quantity`}
                                            control={control}
                                        />
                                    </div>
                                    <div className='content'>
                                        <p className='box-title'>Total Amount</p>
                                        <p>{product.length === 0 && "-"}</p>
                                        <p>{quantity === 0 ? "-" : product && selectedProduct && quantity * selectedProduct.product_price}</p>
                                    </div>
                                    <div className='content'>
                                        <button type="button" onClick={() => remove(index)}>
                                            Delete
                                        </button>
                                    </div>
                                    <div className='content'>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                append({ product: product, quantity: quantity });
                                            }}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className='box-content'>

                        <div className='content'>
                            <p className='box-title'>Select Product</p>
                            <Select
                                defaultChecked
                                value={product}
                                sx={{ minWidth: 120 }}
                                size="small"
                                onChange={(e) => setProduct(e.target.value)}
                            >
                                <MenuItem disabled selected value="select">Select Product</MenuItem>
                                {
                                    menu.map(item => <MenuItem key={item.product_id} value={item.product_name}>{item.product_name}</MenuItem>)
                                }
                            </Select>
                        </div>
                        <div className='content'>
                            <p className='box-title'>Price</p>
                            <p>{product.length === 0 && "-"}</p>
                            <p>{product && selectedProduct && selectedProduct?.product_price}</p>
                        </div>
                        <div className='content'>
                            <p className='box-title'>Custom Quantity</p>
                            <TextField
                                value={quantity}
                                type="number"
                                InputProps={{
                                    inputProps: { min: 1, max: quanInStock }
                                }}
                                size="small"
                                sx={{ maxWidth: 120, margin: '5px 0' }}
                                onChange={e => setQuantity(parseInt(e.target.value))}
                                disabled={product.length == 0 ? true : false}
                            />
                        </div>
                        <div className='content'>
                            <p className='box-title'>Total Amount</p>
                            <p>{product.length === 0 && "-"}</p>
                            <p>{quantity === 0 ? "-" : product && selectedProduct && quantity * selectedProduct.product_price}</p>
                        </div>
                    </div> */}

                    {error && product.length === 0 && <Alert severity="error">Select Product</Alert>}

                    <div className="cus-action">
                        <div>
                            <Button
                                type='submit'
                                variant="contained"
                                disabled={quantity === 0 ? true : false}
                            >
                                Supply
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                sx={{ margin: '10px' }}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Backdrop >
    )
}


export default ShowBackgrop;