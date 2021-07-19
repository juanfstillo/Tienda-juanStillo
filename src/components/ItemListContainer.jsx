import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer() {
    //desestructuring
   const  handleCount=(cant)=>{
        alert(`Sumaste al carrito ${cant} productos`);
    }
    return (
        <div >
        <h1>Bienvenido a mi Tienda</h1>
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>    
        </div>
    )
}
export default ItemListContainer