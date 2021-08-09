import React from 'react'
import { NavLink } from 'react-router-dom'

function Item({item}) {
    
    return (
        <div>
           <NavLink to={item.address}><li key={item.id}><img src={item.pictureUrl} alt="" />{item.title}<br></br>{item.price}</li></NavLink>
        </div>
    )
}

export default Item
