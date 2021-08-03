import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';
import { getMocks } from './getMocks'


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
            
            <ItemList items={itemList}/>
        </div>
    )
}

export default ItemListContainer
