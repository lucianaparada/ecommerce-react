import React from 'react'
import cart from './cart_widget.svg';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart" className="cartwidget" width="30" />
        </div>
    )
}

export default CartWidget;