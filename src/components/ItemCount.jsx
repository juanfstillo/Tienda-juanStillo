import React,{useState} from 'react'

function ItemCount({initial, stock, onAdd}) {
    const[cantidad,setCantidad]=useState(initial)
    const handleAdd=()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)

        }
    }
    const handleRemove=()=>{
        if(cantidad>initial){
            setCantidad(cantidad-1)

        }
    }

    const handleOnAdd=()=>{
        onAdd(cantidad)
    }
    return (
        <div className='card text-center w-50'>
            
            <div className='card-header'>
                <h4>Item Count</h4> 
            </div>

            <div className='card-body'>
                <button onClick={handleRemove}>-</button>   
                <label className="alert alert-white"> {cantidad}</label>
                <button onClick={handleAdd}>+</button>  
                <button className="btn btn-danger btn-block" onClick={handleOnAdd}>Add to Cart</button>            


            </div>
            </div>
            
    )
}

export default ItemCount
