import React from "react";
import NavTab from "./NavTab";

export default function Home() {

    return(
        <React.Fragment>
            <NavTab />
            <div className="homeWrapper">
                <section id="about" className="p-5">
                    <div className="container">
                        <div className="row about">
                            <div className='col-lg-4' id="aboutImg">
                                <img className="d-flex m-auto width-150" src="assets/images/self portrait1-1.png" alt="" />
                            </div>
                            <div className='col-lg-8' id="aboutMyself">
                                <small>A little something...</small>
                                <h2><i>About Myself</i></h2>
                                <p>I'm a front-end web developer, passionate about art, design, and optimizing the user experience for client websites. I utilize HTML/CSS and Javascript, as well as libraries and frameworks like React and Bootstrap, to create websites and applications that solve problems. When I'm not working on improving my coding skills, I often work on art commissions for pixel art, animations, and logos. In my free time, I enjoy playing video games and going on walks with my two energetic dogs, Luna and Misha. Browse my website to learn more about me and explore my previous coding projects and art commissions. Feel free to reach out for more info.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}