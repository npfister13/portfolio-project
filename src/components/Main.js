import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Home from './Home';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Routes, Route, Redirect } from 'react-router-dom';

export default function Main() {

    return(
        <React.Fragment>

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>

            
            {/* <About /> */}
            {/* <Contact /> */}
            {/* <NavTab /> */}
            {/* <Projects /> */}
            {/* <Skills /> */}
        </React.Fragment>
    )

}