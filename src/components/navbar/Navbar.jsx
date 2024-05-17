import React from "react"
import img from '/assets/icono.png'
import CartWidget from "./CartWidget"

import './Navbar.css'

const Navbar = () => {

    return (
    
        <div className="navbar">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={img} alt="local kiki" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Juegos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Licencias</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">OEM</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active">Acerca de...</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
            </nav>

            
        </div>
  
    )

}

export default Navbar