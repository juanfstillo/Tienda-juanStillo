import React from 'react'
import {Link} from 'react-router-dom'


 function Item ( { item } ) {
    return (
        <div >
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} />
            <h6>Precio $ {item.price}</h6>
            <Link to="/item/:itemId" ClassName="nav-link">Conocé más</Link>
        </div>
    )
}
export default Item
