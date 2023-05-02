
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