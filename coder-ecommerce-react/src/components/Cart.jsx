import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
    const [state, setState] = useContext(CartContext)
    
    return (
        <div>
            Soy el carrito
        </div>
    )
}

export default Cart
