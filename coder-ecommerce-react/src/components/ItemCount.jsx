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

const [cart, setCart] = useContext(CartContext);
function guardarEnEstadoCart(item){
        if(pulsado){
        setCart([...cart, item]);
        }
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
        guardarEnEstadoCart(item);
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
                    <Btn handleOnAdd={handleOnAdd} clase={ pulsado ? ' btn-success' : 'd-none' } titulo={'Comprar'} />
                    <NavLink to="/cart"><Btn handleOnAdd={handleOnAdd} clase={ pulsado ? 'd-none' : 'btn-success' } titulo={'Terminar compra'} /></NavLink>
            </div>
        </div>
    )
}

export default ItemCount
