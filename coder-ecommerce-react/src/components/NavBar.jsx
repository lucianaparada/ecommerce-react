import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="navLinkContainer p-3" >
            <NavLink to="/">Ecommerce</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="navbarItem" to="/category/plantas">Plantas</NavLink>
                    <NavLink className="navbarItem" to="/category/macetas">Macetas</NavLink>
                    <NavLink className="navbarItem" to="/category">Semillas</NavLink>
                    <Nav.Link className="navbarItem" href="#"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
        </div>
    )
}

export default NavBar
