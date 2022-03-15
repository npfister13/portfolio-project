import React from 'react';


export default function Loading() {

    let rngNum = Math.random()

    return(
        <div className="d-flex loadingDiv justify-content-center">
            <img src={`./assets/images/name animation glitch.gif?dummy=${rngNum}`} alt="Nicholas Pfister"/>
            
        </div>
    )
}