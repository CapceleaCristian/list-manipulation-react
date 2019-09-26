import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../../public/logo.png';

export default function Navigation() {
    return (
        <div>
            <nav className="navigationBar">
                <div className="container">
                    <div className="navLinks">
                        <NavLink to="/"><img className="navLogo" src={logo} alt="" /></NavLink>
                        <NavLink to="/">Home</NavLink>
                        <NavLink className="userCatalog" to="/catalog">Catalog (Click me)</NavLink>
                        <NavLink to="/team">Team</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}