import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'



 function Item ( { item } ) {
    return (
<CardGroup>
      
<Card>
    <Card.Img  style={{ width: '8rem' }} src={item.img} alt={item.name}  />
    <Card.Body>
      <Card.Title>{item.name} {item.characteristic}</Card.Title>
      <Card.Text>
      <h6>Precio $ {item.price}</h6>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Link to={`/item/${item.id}`} ClassName="nav-link">Conocé más</Link>
    </Card.Footer>
  </Card>    
  </CardGroup>

        
        
        // <div >
        //     <h4>{item.name}</h4>
        //     <img src={item.img} alt={item.name} />
        //     <h6>Precio $ {item.price}</h6>
        //     <Link to={`/item/${item.id}`} ClassName="nav-link">Conocé más</Link>
        // </div>
    )
}
export default Item
