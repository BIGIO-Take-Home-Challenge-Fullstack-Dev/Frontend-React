/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {

    return (
        <div>
            <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink to="/dashboard" className="navbar-item">
                        
                    </NavLink>

                    <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar