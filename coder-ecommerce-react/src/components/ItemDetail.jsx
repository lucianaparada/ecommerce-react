import React from 'react'

function ItemDetail({item={}}) {
    return (
        <div className="mt-5">
           <img src={item.pictureUrl} alt="" />
           <h3>Nombre:{item.title} </h3>
           <h3>Precio: {item.price}</h3> 
        </div>
    )
}

export default ItemDetail
