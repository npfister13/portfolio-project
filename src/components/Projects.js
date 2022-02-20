import React, { useState, Component } from "react";
import NavTab from "./NavTab";
import { Card } from "react-bootstrap";
import { PROJECTS } from "../shared/projects";

function RenderProject({projects, projectsDisplayArray, projectsPerScreen}) {
    const tempArray = projectsDisplayArray;
    return( 
        <div className="row">
            {                 
                projects.map((project, index) => {
                    tempArray.indexOf(project) > -1 ? console.log('in array already') : tempArray.push(project) 
                    if (index < projectsPerScreen){
                        console.log('in the if')
                        console.log('pps ' + projectsPerScreen)
                        return (
                            <Card key={project.id}>
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    
                                </Card.Body>
                                <button className="btn align-self-center">Go somewhere</button>
                            </Card>

                        )
                    }
                    else {
                        return(null)
                    }
                })
            }
        </div>
    )
}

function MoreButton(props) {
    return(
        <button className="btn" onClick={props.onClick}>
            Load More
        </button>
    )
}

function LessButton(props) {
    return(
        <button className="btn" onClick={props.onClick}>
            Show Less
        </button>
    )
}

export default class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            projectsPerScreen: 3,
            currentPage: 0,
            projects: PROJECTS,
            projectsDisplayArray: []
        }
    }

    increaseProjectCount = () => {
        if (this.state.projectsPerScreen >= this.state.projects.length){
            console.log('max projects')
        }
        else {
            this.setState({projectsPerScreen: this.state.projectsPerScreen + 3})
            console.log(this.state.projectsPerScreen)
        }
    }

    decreaseProjectCount = () => {
        this.setState({projectsPerScreen: this.state.projectsPerScreen - 3})
        console.log('Less More Presssed ' + this.state.projectsPerScreen)
    }

    render() {
        let moreBtn;
        let lessBtn;
        console.log('render()')
        if (this.state.projectsPerScreen < this.state.projects.length) {
            moreBtn = <MoreButton onClick={this.increaseProjectCount} />
        } else {
            moreBtn = null
        }
        if (this.state.projectsPerScreen > 3) {
            lessBtn = <LessButton onClick={this.decreaseProjectCount} />
        } else {
            lessBtn = null
        }
        return(
            <React.Fragment>
                <NavTab/>
                <div className="projects">
                    <div className="container">
                        <h1>Projects: </h1>
                        <RenderProject projects={this.state.projects} projectsPerScreen={this.state.projectsPerScreen} projectsDisplayArray={this.state.projectsDisplayArray} />
                        {moreBtn}
                        {lessBtn}
                    </div>
                </div>
            </React.Fragment>
        )
    
    }
}