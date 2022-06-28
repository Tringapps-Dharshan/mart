import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import RetailerDetails from './RetailerDetails'
import ShowBackgrop from "./ShowBackgrop"
import { StockInHand, Cus, displayOverlays } from '../typescript/type'
import customer from '../data/customer.json'
import products from '../data/products.json'
function Header() {

    const displayOverlay: displayOverlays = (i) => {
        setOpen(!open);
        setUser(i);
    }

    const [open, setOpen] = useState<boolean>(false);
    const [user, setUser] = useState<number>(0);
    const [Stock, setStock] = useState<StockInHand[]>(products);
    const [Retailer, setRetailer] = useState<Cus[]>(customer);

    useEffect(() => {
        console.log(Retailer,'Updated');

        localStorage.setItem('RetailerDetails', JSON.stringify(Retailer));
    }, [Retailer]);

    useEffect(()=>{
        const Data:any = localStorage.getItem('RetailerDetails');
        // console.log(JSON.parse(Data));
        // console.log(Retailer);
        
    })

    

    return (
        <div>
            <div className="header">
                <div className="header-text">DHS Mart</div>
                <div>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(0)} sx={{ margin: '10px' }}>Retailer 1</Button>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(1)} sx={{ margin: '10px' }}>Retailer 2</Button>
                    <Button variant="contained" size="small" onClick={() => displayOverlay(2)} sx={{ margin: '10px' }}>Retailer 3</Button>
                    <ShowBackgrop Stock={Stock} Retailer={Retailer} user={user} open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className="retail">
                {
                    Retailer.map(i =>
                        <div className='part' key={i.id}>
                            <RetailerDetails details={i} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header