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
                            <h1 id="myName">NICHOLAS<span id="invisSpace"> </span>PFISTER</h1>
                            {/* <img id="headerImg" src="./assets/images/myname.png" alt="Nicholas Pfister"/> */}
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
                        <NavItem className="glitch" active>
                            <NavLink className="nav-link"  to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="glitch">
                            <NavLink className="nav-link navProjects" to="/projects">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem className="glitch">
                            <NavLink className="nav-link navArtwork" to="/artwork">
                                Artwork
                            </NavLink>
                        </NavItem>
                        <NavItem className="glitch">
                            <NavLink className="nav-link navResume" to="/Resume">
                                Resume
                            </NavLink>
                        </NavItem>
                        <NavItem className="glitch">
                            <NavLink className="nav-link navContact" to="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </React.Fragment>
    )

}