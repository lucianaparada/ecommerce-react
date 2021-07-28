import React from 'react'

function ItemDetail({items}) {
    return (
        <div className="mt-5" key={items.id}>
           <img src={items.pictureUrl} alt="" />
           <h3>Nombre:{items.title}</h3>
           <h3>Precio: {items.price}</h3> 
        </div>
    )
}

export default ItemDetail
