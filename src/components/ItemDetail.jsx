import React from 'react'
import Item from'./Item'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'





function ItemDetail ( { itemList } ) 
{    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={itemList[0]?.img} />
    <Card.Body>
      <Card.Title>{itemList[0]?.name} {itemList[0]?.characteristic}</Card.Title>
      <Card.Text>
      {itemList[0]?.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>$ {itemList[0]?.price}</ListGroupItem>
      <Button variant="warning">Comprar</Button>
    </ListGroup>
    {/* <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body> */}
  </Card>   
 
        // <div>
        //     <div >
        //         <h4>{itemList[0]?.name}</h4>
        //         <img src={itemList[0]?.img} alt={itemList[0]?.name} />
        //     </div>
        // </div>
    )
}
export default ItemDetail