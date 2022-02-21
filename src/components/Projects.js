import React, { useState, Component } from "react";
import NavTab from "./NavTab";
import { Card } from "react-bootstrap";
import { PROJECTS } from "../shared/projects";
import { ARTWORKS } from "../shared/artworks";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
    },
    border: {
        borderBottom: "2px solid lightgray",
        width: "100%"
    },
    content: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        fontWeight: 500,
        fontSize: 22,
        color: "lightgray"
    }
}));

const DividerWithText = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.border} />
            <span className={classes.content}>{children}</span>
            <div className={classes.border}/>
        </div>
    )
}

function RenderItem({items, itemsDisplayArray, itemsPerScreen}) {
    const tempArray = itemsDisplayArray;
    return( 
        <div className="row">
            {                 
                items.map((item, index) => {
                    tempArray.indexOf(item) > -1 ? console.log('in array already') : tempArray.push(item) 
                    if (index < itemsPerScreen){
                        console.log('in the if')
                        console.log('pps ' + itemsPerScreen)
                        return (
                            <Card key={item.id}>
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
            artworksPerScreen: 3,
            projects: PROJECTS,
            artworks: ARTWORKS,
            projectsDisplayArray: [],
            artworksDisplayArray: [],
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
                        <RenderItem items={this.state.projects} itemsPerScreen={this.state.projectsPerScreen} itemsDisplayArray={this.state.projectsDisplayArray} />
                        {moreBtn}
                        {lessBtn}
                    </div>
                    <DividerWithText>Artwork</DividerWithText>
                    <div className="container">
                        <h1>Artwork:</h1>
                        <RenderItem items={this.state.artworks} itemsPerScreen={this.state.artworksPerScreen} itemsDisplayArray={this.state.artworksDisplayArray} />
                    </div>
                </div>
            </React.Fragment>
        )
    
    }
}