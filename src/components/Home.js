import React from "react";
import NavTab from "./NavTab";

export default function Home() {
    return(
        <React.Fragment>
            <NavTab />
            <div id="infoPanel" className="container-fluid">
                <div className="row">
                    <div className="container">
                        <div className="row center" id="infoPanelBody">
                            <img id="homeImg" className="d-flex center m-auto width-150" src="assets/images/alright this is a different pose i swear.png" alt="" />
                            <p className="infoPanelText">Hey. I'm Nicholas. <br />I create websites, apps, and pixel art.</p>
                            <p className="infoPanelText">Check out some of my <a href="/projects">projects</a> and <a href='/artwork'>artwork</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}