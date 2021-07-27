import React from 'react'


 function Item ( { item } ) {
    return (
        <div >
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} />
            <h6>Precio $ {item.price}</h6>
        </div>
    )
}
export default Item
