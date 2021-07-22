import React from 'react'
import Button from 'react-bootstrap/Button';


 function Item ( { item } ) {
    return (
        <div >
            <h4>{item.name}</h4>
            <img src={item.img} />
            <h6>Precio $ {item.price}</h6>
        </div>
    )
}
export default Item
