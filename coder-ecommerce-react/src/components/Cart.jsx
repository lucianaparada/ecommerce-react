import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
function Cart() {
    const {cart} = useContext(CartContext)
    return (
        <div>
        {cart.length > 0 && cart.map(item => (
       <CartItem 
        id={item.item[0].id}
        img={item.item[0].pictureUrl}
        quantity={item.quantity}
        desc={item.item[0].title}
        key={item.item[0].id}
        price={item.item[0].price}
      />

      ))}
        </div>
    )
    
}
export default Cart