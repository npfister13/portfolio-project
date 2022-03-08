import React from 'react';
// import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home';
import Artwork from './Artwork'
import { Routes, Route } from 'react-router-dom';

export default function Main() {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </React.Fragment>
    )

}