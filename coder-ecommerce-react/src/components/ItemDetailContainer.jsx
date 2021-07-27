import React from 'react'
import {useState, useEffect} from 'react'
import { getMocks } from './getMocks'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState([])

    useEffect(() => {
        getMocks()
        .then(resp => setItem(resp))
    }, [])

    console.log(item)
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
