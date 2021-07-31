import React from 'react'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import ball from './ball.png'
import Cart from './Cart'

function NavBar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          <img src={ball}  width={30} height={30} className="d-inline-block align-top" alt="logo" />
         <NavLink ClassName="home-button" to ="/">WS Tienda de Tenis</NavLink> 
        </a>  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/category/racket">Raquetas</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/category/string">Cuerdas</NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/faq">Faq</NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <a href={Cart}><CartWidget/></a>
            </li>
          </ul>
        </div>
      </nav>  
        </div>
    )
}

export default NavBar
