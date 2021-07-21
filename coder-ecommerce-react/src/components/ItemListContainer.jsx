import React from 'react'
import ItemCount from './ItemCount';

const handleCount=(cant)=>{
    alert("Agregaste "+cant+" unidades de este producto."); 
}
const ItemListContainer = (props) => {
    const {greeting} = props;
    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={handleCount} />
        </div>
    )
}

export default ItemListContainer
