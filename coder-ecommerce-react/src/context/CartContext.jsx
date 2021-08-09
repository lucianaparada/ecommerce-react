import { React, useState, createContext } from "react";

export const CartContext = createContext();

export default function UseCartContext({children}){

    const [cart, setCart] = useState([{item:{}, quantity: 0}])

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