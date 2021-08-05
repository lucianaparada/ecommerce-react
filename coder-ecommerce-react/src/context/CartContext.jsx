import { React, useState, createContext, useContext } from "react";

export const CartContext = createContext();

export default function UseCartContext({children}){
    
    const [cart, setCart] = useState([{item:{}, quantity}])

    /*function guardarEnEstadoCart(item){
        if(){

        }
        setCart([...cart, item]);
    }*/

    return(
        
        <CartContext.Provider value={{
            cart, setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

