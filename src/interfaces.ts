
export interface CartItem {
    name: string
    cost: string
    imgSrc: string
    qty: number
}

export interface NavBarProps{
    onOpen: () =>void;
}

export interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems?: CartItem[];
}

export interface ShopProps{
    filter: string;
}

export interface ProductItemProps{
    name: string;
    cost: string;
    imgSrc: string;
    category: string
}

export interface ProductsProps{
    products: ProductItemProps[];
}

export interface CartProviderProps {
    children: React.ReactNode;
}

export interface QuantityProps{
    onQtyChange: (value: number) => void
}