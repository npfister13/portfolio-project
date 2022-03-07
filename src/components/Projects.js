import React, { Component } from "react";
import NavTab from "./NavTab";
import { Card } from "react-bootstrap";
import { PROJECTS } from "../shared/projects";


function RenderItem({items, itemsDisplayArray, itemsPerScreen}) {
    const tempArray = itemsDisplayArray;
    return( 
        <div className="row">
            {                 
                items.map((item, index) => {
                    tempArray.indexOf(item) > -1 ? console.log('in array already') : tempArray.push(item) 
                    if (index < itemsPerScreen){
                        return (
                            <Card className="projectCard" key={item.id}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
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
            projects: PROJECTS,
            projectsDisplayArray: [],
        }
    }

    increaseProjectCount = () => {
        if (this.state.projectsPerScreen >= this.state.projects.length){
        }
        else {
            this.setState({projectsPerScreen: this.state.projectsPerScreen + 3})
            console.log(this.state.projectsPerScreen)
        }
    }

    decreaseProjectCount = () => {
        this.setState({projectsPerScreen: this.state.projectsPerScreen - 3})
        console.log(this.state.projectsPerScreen)
    }

    increaseArtworkCount = () => {
        if (this.state.artworksPerScreen >= this.state.artworks.length){
        }
        else {
            this.setState({artworksPerScreen: this.state.artworksPerScreen + 3})
            console.log(this.state.artworksPerScreen)
        }
    }

    decreaseArtworkCount = () => {
        this.setState({artworksPerScreen: this.state.artworksPerScreen - 3})
        console.log(this.state.artworksPerScreen)
    }

    render() {
        let moreProjects;
        let lessProjects;
        console.log('render()')
        if (this.state.projectsPerScreen < this.state.projects.length) {
            moreProjects = <MoreButton onClick={this.increaseProjectCount} />
        } else {
            moreProjects = null
        }
        if (this.state.projectsPerScreen > 3) {
            lessProjects = <LessButton onClick={this.decreaseProjectCount} />
        } else {
            lessProjects = null
        }
        return(
            <React.Fragment>
                <NavTab/>
                <div className="projects">
                    <div className="container">
                        <RenderItem items={this.state.projects} itemsPerScreen={this.state.projectsPerScreen} itemsDisplayArray={this.state.projectsDisplayArray} />
                        {moreProjects}
                        {lessProjects}
                    </div>
                </div>
            </React.Fragment>
        )
    
    }
}