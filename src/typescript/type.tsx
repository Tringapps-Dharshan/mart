export type StockInHand = {
    product_id: number,
    product_name: string,
    product_price: number,
    product_inStock: number
}

export type martStock = {
    Stock: StockInHand[],
    setStock: (set: StockInHand[]) => void
}

export type product = {
    id : string,
    name: string,
    quantity: number
}

export type Cus = {
    id: number,
    name: string,
    products: product[],
    address: string
}
export type props = {
    Stock: StockInHand[],
    Retailer: Cus[],
    user: number,
    open: boolean,
    setOpen: setOpen
}

export type displayOverlays = (i: number) => void
export type retailerStock = {
    retailer: Cus[],
    setReatiler: (set: Cus[]) => void
}

export type setOpen = (set: boolean) => void

export type retailerprops = {
    details: Cus
}

export type Optionsprops = {
    menu: StockInHand[]
}