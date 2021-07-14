import React from 'react'

function NavBar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src="data:image/jpeg;base64,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" width={30} height={30} className="d-inline-block align-top" alt="logo" />
          WS Tienda de Tenis
        </a>  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="">Raquetas</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="">Pelota</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="">FAQ</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>  
        </div>
    )
}

export default NavBar
