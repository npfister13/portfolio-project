import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function NavTab() {

    const [isNavOpen, toggleNav] = useState(false)

    return(
        <React.Fragment>
            <div className="mt-4 p-5 text-white rounded fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 id="myName">Nicholas Pfister</h1>
                            <h2 id="subtitle" className='pt-3'>Programmer | Artist</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar dark sticky="top" expand="sm">
            
                <NavbarToggler onClick={() => {
                    toggleNav(!isNavOpen)
                    console.log(isNavOpen)
                    }} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className='m-auto'>
                        <NavItem active>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <i className="fa fa-list fa-lg"/> About
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <i className="fa fa-info fa-lg"/> Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/projects">
                                <i className="fa fa-address-card fa-lg"/> Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/artwork">
                                <i className="fa fa-address-card fa-lg"/> Artwork
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Resume">
                                <i className="fa fa-address-card fa-lg"/> Resume
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <span className="navbar-text ml-auto">
                    </span>
                </Collapse>
            </Navbar>

        </React.Fragment>
    )

}