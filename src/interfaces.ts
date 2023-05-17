
export interface CartItem {
    key: string
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
    key: string;
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
    value?: number;
    onQtyChange: (value: number) => void
}