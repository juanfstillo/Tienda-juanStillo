import React from 'react'
import cart from './shopping-basket.svg'
 function CartWidget() {
    return (
        <div>
            <img src={cart} alt ="cart" style={{ height: "40px"}}/>
        </div>
    )
}
export default CartWidget