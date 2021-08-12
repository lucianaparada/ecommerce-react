import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
function ItemCount({initial, stock, item}) {
    const [cantidad, setCantidad] = useState(initial);
    const {guardarEnEstadoCart} = useContext(CartContext);
    const handleAdd=()=>{
        if (cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }
    const handleRemove=()=>{
        if (cantidad > initial){
            setCantidad(cantidad - 1);
        }
    }
    const onAdd = () => {
        guardarEnEstadoCart(item, cantidad);
    }
    return (
        <div className="card w-50 text-center">
            <div className="card-body">
                <button onClick={handleRemove}>-</button>
                <input type="text" value={cantidad} onChange={onAdd}/>
                <button onClick={handleAdd}>+</button><br></br>
                    <NavLink to="/cart">
                        <button onClick={onAdd}>Comprar</button>                        
                    </NavLink>
            </div>
        </div>
    )
}
export default ItemCount
