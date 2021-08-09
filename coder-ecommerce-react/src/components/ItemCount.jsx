import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'


const Btn=({handleOnAdd, clase, titulo})=>{
    const objProps={
        className: `btn ${clase} btn-block`,
        titulo: 'Comprar'
    }
    
    return <button
        {...objProps}
        onClick={handleOnAdd}
    >
        {titulo}
    </button>
}

function ItemCount({initial, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initial);
    const [pulsado, setPulsado] = useState(true)

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
    const handleOnAdd=(e)=>{
        onAdd(cantidad);
        setPulsado(!pulsado)
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
                    <NavLink to="/cart"><Btn handleOnAdd={handleOnAdd} clase={ pulsado ? 'd-none' : 'btn-success' } titulo={'Terminar compra'} /></NavLink>
                    <Btn handleOnAdd={handleOnAdd} clase={ pulsado ? ' btn-success' : 'd-none' } titulo={'Comprar'} />
            </div>
        </div>
    )
}

export default ItemCount
