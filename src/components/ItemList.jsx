import React from 'react'
import Item from './Item'

function ItemList ( { itemList } ) 
{    return (
        <div>
            {itemList.map( item => <Item item={item} />) }
        </div>
    )
}

export default ItemList
