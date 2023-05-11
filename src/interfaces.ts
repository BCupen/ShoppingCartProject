
export interface CartItem {
    name: string
    amt: string
    imgSrc: string
    qty: number
}

export interface NavBarProps{
    onOpen: () =>void;
}

export interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
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