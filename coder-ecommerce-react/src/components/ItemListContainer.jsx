import React from 'react'
import {useState, useEffect} from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import product1 from './product-1.jpg'
import product2 from './product-2.jpg'
import product3 from './product-3.jpg'
import product4 from './product-4.jpg'


const handleCount=(cant)=>{
    alert("Agregaste "+cant+" unidades de este producto."); 
}
function ItemListContainer(){
    
    const [itemList, setItemList] = useState([]);
    
    useEffect(()=>{
        
        const items=[
        {id: '1', title: 'Planta 1', description: 'Planta interior deco', price: 800, pictureUrl: product1},
        {id: '2', title: 'Planta 2', description: 'Maceta Gris Topo', price: 950, pictureUrl: product2},
        {id: '3', title: 'Maceta 1', description: 'Maceta Beige', price: 1000, pictureUrl: product3},
        {id: '4', title: 'Maceta 2', description: 'Planta interior deco', price: 700, pictureUrl: product4}
    ];
        
    const getPromiseTask=()=>{
    return task;
    }
    

    const task = new Promise((resuelto, rechazado)=>{
        let status=200;
        if (status===200){
            setTimeout(()=>{
                resuelto(items);
            }, 2000)
        } else {
            rechazado('rechazado');
        }
    });

    getPromiseTask()
    .then((resp)=>setItemList(resp))
    .catch(err=>{console.log('un error');})

    }, [])
    console.log(itemList);
    return (
        <div>
            <ItemCount stock={10} initial={1} onAdd={handleCount} />
            <ItemList items={itemList}/>
        </div>
    )
}

export default ItemListContainer
