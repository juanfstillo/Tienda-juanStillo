import React from 'react'
import Item from './Item'

function ItemList ( { itemList } ) 
{    return (
        <div>
            {itemList.filter( item => <Item item={item.id===1} />) }
        </div>
    )
}

export default ItemList
