import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'

function ItemCount({initial, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initial);
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
    const handleOnAdd=()=>{
        onAdd(cantidad);
        console.log(cantidad);
    }

    return (
        <div className="card w-50 text-center">
            <div className="card-header">
                <h4>Item Count</h4>
            </div>
            <div className="card-body">
                <button onClick={handleRemove}>-</button>
                <input type="text" value={cantidad} onChange={handleOnAdd}/>
                <button onClick={handleAdd}>+</button><br></br>
                <NavLink to="/cart"><button className="btn btn-primary btn-block" onClick={handleOnAdd}>
                    Terminar mi compra
                </button></NavLink>
            </div>
        </div>
    )
}

export default ItemCount
