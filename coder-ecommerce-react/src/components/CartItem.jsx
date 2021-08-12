import React from 'react'
const CartItem = ({ id, img, desc, price, quantity}) => {
  return (
    <article key={id}>
      <img src={img} alt={desc} />
        <h4>{desc}</h4>
        <h4 >${price}</h4>
        <p>{quantity}</p>   
    </article>
  )
}
export default CartItem