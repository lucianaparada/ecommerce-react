import React from 'react'


function Item({item}) {
    
    return (
        <div>
           <li key={item.id}><img src={item.pictureUrl} alt="" />{item.title}<br></br>{item.price}</li> 
        </div>
    )
}

export default Item
