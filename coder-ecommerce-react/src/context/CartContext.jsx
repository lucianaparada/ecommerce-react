import { React, useState, createContext } from "react";

export const CartContext = createContext();

export default function UseCartContext({children}){
    const [cart, setCart] = useState([])
    const guardarEnEstadoCart = (item, quantity) =>{
        const index = cart.findIndex(i => i.item.id === item.item.id)
        if (index === -1){
            setCart([...cart, {'item': item, 'quantity': quantity }])
        console.log(cart)
        } else {
            const newQuantity = cart[index].quantity + item.quantity;
            const oldList = cart.filter(old => old.item.id !== item.item.id)
            setCart([...oldList, {item: item.item, quantity: newQuantity}])
        }     
    }
    
    const removeItem = (oldItem) => {
        const oldList = cart.filter(old => old.item.id !== oldItem.item.id)
    }

    const setPrice = () => {
        return cart.reduce((accum, next) => (accum + (next.quantity * next.item.price)), 0)}

    const cantidadCart = () => {
        return cart.reduce((accum, next) => accum + next.quantity, 0)
    }

    const cleanList = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{
            cart, 
            setCart, 
            guardarEnEstadoCart, 
            setPrice, 
            cleanList, 
            removeItem, 
            cantidadCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
