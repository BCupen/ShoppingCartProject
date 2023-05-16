import { createContext, useState } from "react"
import { CartItem, CartProviderProps } from "../interfaces";


export const CartContext = createContext<any[]>([])

export default function CartProvider ({ children }: CartProviderProps){
    const [ cart, setCart ] = useState<CartItem[]>([]);

    const addItemToCart = (item: CartItem) =>{
      setCart([...cart, item]);
    }

    return (
        <CartContext.Provider value={[cart, addItemToCart]}>
            {children}
        </CartContext.Provider>
    )
}