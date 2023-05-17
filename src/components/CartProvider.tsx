import { createContext, useState } from "react"
import { CartItem, CartProviderProps } from "../interfaces";


export const CartContext = createContext<any[]>([])

export default function CartProvider ({ children }: CartProviderProps){
    const [ cart, setCart ] = useState<CartItem[]>([]);

    const getCartIndex = (key: string) => {
        for(const [i, item] of cart.entries()){
            if(item.key === key)
                return i;
        }
        return -1;
    }

    const addItemToCart = (item: CartItem) =>{
      setCart([...cart, item]);
    }

    const updateItemQty = (key: string, qty: number) =>{
        const index = getCartIndex(key);
        const cartArray = cart;
        const cartItem = cartArray[index];
        cartItem.qty = cartItem.qty + qty;
        cartArray[index] = cartItem;

        setCart([...cartArray]);
    }

    const removeItem = (index: number) =>{
        cart.splice(index, 1);

        setCart([...cart]);
    }

    return (
        <CartContext.Provider value={[cart, getCartIndex, addItemToCart, updateItemQty, removeItem]}>
            {children}
        </CartContext.Provider>
    )
}