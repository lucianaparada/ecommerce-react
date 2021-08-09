import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';


let cantidadProductos = 0;
const handleCount=(cant)=>{
    cantidadProductos = cant;
}

function ItemDetail({items}) { 
    
    return (
        <div>
            {items.map((item)=>{
                const {title, price, id, pictureUrl} = item
                return(
                    <div  className="mt-5" key={id}>
                    <img src={pictureUrl} alt="" />
                    <h3>Nombre:{title}</h3>
                    <h4>Precio: {price}</h4>
                    </div>
                )
            })}
            <ItemCount stock={10} initial={1} onAdd={handleCount} item={item}/>
        </div>
    )
}

export default ItemDetail
