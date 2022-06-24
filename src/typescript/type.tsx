export type StockInHand = {
    product_id: number,
    product_name: string,
    product_price: number,
    product_inStock: number
}[]

export type martStock = {
    Stock: StockInHand,
    setStock: (set: StockInHand) => void
}

export type product = {
    name: string,
    quantity: number
}[]

export type Cus = {
    id: number,
    name: string,
    products: product,
    address: string
}
export type props = {
    products: StockInHand,
    customer: Cus[],
    user: number,
    open: boolean,
    setOpen: setOpen
}


export type displayOverlays = (i: number) => void
export type retailerStock = {
    retailer: product,
    setReatiler: (set: product) => void
}

type setOpen = (set: boolean) => void