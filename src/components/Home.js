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
                                <p>I graduated from the University of Kentucky with my Bachelor of Science in Information Communication Technology and Master of Business Administration. I'm a graduate from Nucamp Coding Bootcamp with a focus in learning Full Stack development. I have experience with creating websites with just HTML/CSS and Javascript, but also using frameworks like React and Bootstrap. I'm very interested in website development and want to some day make my own video game.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}