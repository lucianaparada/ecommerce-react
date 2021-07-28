import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getMocks } from './getMocks'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    const [items, setItem] = useState([])

    const { productId } = useParams()
    
    useEffect(()=>{
        
    if(productId===undefined){
        getMocks()
        .then(resp=> setItem(resp))
    } else {
        getMocks()
        .then(resp=> setItem(resp.filter(it => it.id===productId)))
    }

    }, [productId])
    console.log(items);
    return (
        <div>
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer
