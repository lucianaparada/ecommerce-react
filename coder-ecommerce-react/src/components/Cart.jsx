import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import ItemDetail from './ItemDetail'

function Cart() {
    const {cart, setCart} = useContext(CartContext)

    return (
        <div>
            {cart.map(item=> <div>
                <h2>{item.title}</h2><p>{item.quantity}</p>
                </div>)}
        </div>
    )
}
export default Cart
