import React from 'react'

function ItemListContainer({greeting,user}) {
    //desestructuring
    return (
        <div className='banner'>
            <h1  className='greeting'><em>{greeting}</em></h1>
            <h2 className='user'>{user}</h2>
            
        
            
        </div>
    )
}
export default ItemListContainer