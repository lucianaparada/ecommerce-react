import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getMocks } from './getMocks'



const handleCount=(cant)=>{
    alert("Agregaste "+cant+" unidades de este producto."); 
}
function ItemListContainer(){
    
    const [itemList, setItemList] = useState([]);

    const { categoryId  } = useParams()
    
    useEffect(()=>{
        
    if(categoryId===undefined){
        getMocks()
        .then(resp=> setItemList(resp))
    } else{
        getMocks()
        .then(resp=> setItemList(resp.filter(it => it.category===categoryId)))
    }

    }, [categoryId])
    console.log(itemList);
    return (
        <div>
            {/*<ItemCount stock={10} initial={1} onAdd={handleCount} />*/}
            <ItemList items={itemList}/>
        </div>
    )
}

export default ItemListContainer
