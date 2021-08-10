import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

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

function ItemCount({initial, stock, item}) {
    const [cantidad, setCantidad] = useState(initial);
    const [pulsado, setPulsado] = useState(true)
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
        setPulsado(!pulsado);
        guardarEnEstadoCart(item, cantidad);
    }

    return (
        <div className="card w-50 text-center">
            <div className="card-body">
                <button onClick={handleRemove}>-</button>
                <input type="text" value={cantidad} onChange={onAdd}/>
                <button onClick={handleAdd}>+</button><br></br>
                    <Btn handleOnAdd={onAdd} clase={ pulsado ? ' btn-success' : 'd-none' } titulo={'Comprar'} />
                    <NavLink to="/cart"><Btn handleOnAdd={null} clase={ pulsado ? 'd-none' : 'btn-success' } titulo={'Terminar compra'} /></NavLink>
            </div>
        </div>
    )
}

export default ItemCount
