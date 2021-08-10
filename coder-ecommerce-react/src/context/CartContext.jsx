import { React, useState, createContext } from "react";

export const CartContext = createContext();


export default function UseCartContext({children}){
    
    const [cart, setCart] = useState([])
    const guardarEnEstadoCart = (item, quantity) =>{
        setCart([...cart, {'item': item , 'quantity': quantity }]);
    }    
    return(

        <CartContext.Provider value={{
            cart, setCart, guardarEnEstadoCart
        }}>
            {children}
        </CartContext.Provider>
    )
}