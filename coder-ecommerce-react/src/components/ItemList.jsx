import React from 'react'
import Item from './Item';


function ItemList({items}) {
    
    return (
        <div>
           <ul>{items.map(item=> <Item item={item}/>)}</ul>
        </div>
    )
}

export default ItemList
