import React, { useState, useEffect, useRef } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function NavTab() {

    const [isNavOpen, toggleNav] = useState(false)

    function useFirstRender() {
        const ref = useRef(true);
        const firstRender = ref.current;
        ref.current = false;
        return firstRender;
    }

    function NameStyle() {
        var firstRender = useFirstRender();
        
        if (firstRender === true){
            console.log('firstrender true')
            firstRender = false;
            return (
                <h1 
                    id="myName"
                    style={{ 
                        visibility: 'visible',
                        fontFamily: 'Press Start 2P',
                        fontSize: '64px',
                        textShadow: '0.1rem 0 0.1 rem red, -0.125rem 0 0.1rem blue',
                        animation: 'textfadein 1s 1, textloadin 0.01s 50 1.21s alternate'
                    }}
                
                >NICHOLAS<span id="invisSpace"> </span>PFISTER</h1>
            )
        }
        return (
            <h1 id="myName">NICHOLAS<span id="invisSpace"> </span>PFISTER</h1>
        )
    }

    
    return(
        <React.Fragment>
            <div className="mt-4 p-5 text-white rounded fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <NameStyle/>
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