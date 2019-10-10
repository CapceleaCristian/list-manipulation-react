import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import endavaLogo from '../../../../public/endava-logo.png';

export default function Navigation() {
    return (
        <div>
            <nav className="navigationBar">
                <div className="container">
                    <div className="navLinks">
                        <NavLink to="/"><img className="navLogo" src={endavaLogo} alt="" /></NavLink>
                        <NavLink to="/">Home</NavLink>
                        <NavLink className="userCatalog" to="/catalog">Catalog of Items</NavLink>
                        <NavLink to="/team">Team</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}
