import React, { Component } from "react";
import NavTab from "./NavTab";
import { Card } from "react-bootstrap";
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
                            <Card className="artCard" key={item.id}>
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

export default class Artwork extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            artworksPerScreen: 2,
            artworks: ARTWORKS,
            artworksDisplayArray: [],
        }
    }

    increaseProjectCount = () => {
        if (this.state.artworksPerScreen >= this.state.artworks.length){
        }
        else {
            this.setState({artworksPerScreen: this.state.artworksPerScreen + 2})
            console.log(this.state.artworksPerScreen)
        }
    }

    decreaseProjectCount = () => {
        this.setState({artworksPerScreen: this.state.artworksPerScreen - 2})
        console.log(this.state.artworksPerScreen)
    }

    increaseArtworkCount = () => {
        if (this.state.artworksPerScreen >= this.state.artworks.length){
        }
        else {
            this.setState({artworksPerScreen: this.state.artworksPerScreen + 2})
            console.log(this.state.artworksPerScreen)
        }
    }

    decreaseArtworkCount = () => {
        this.setState({artworksPerScreen: this.state.artworksPerScreen - 2})
        console.log(this.state.artworksPerScreen)
    }

    render() {
        let moreArtworks;
        let lessArtworks;
        console.log('render()')
        if (this.state.artworksPerScreen < this.state.artworks.length) {
            moreArtworks = <MoreButton onClick={this.increaseArtworkCount} />
        } else {
            moreArtworks = null
        }
        if (this.state.artworksPerScreen > 2) {
            lessArtworks = <LessButton onClick={this.decreaseArtworkCount} />
        } else {
            lessArtworks = null
        }
        return(
            <React.Fragment>
                <NavTab/>
                <div className="artworks">
                    <DividerWithText><h1>Artwork</h1></DividerWithText>
                    <div className="container">
                        {/* <h1>Artwork:</h1> */}
                        <RenderItem items={this.state.artworks} itemsPerScreen={this.state.artworksPerScreen} itemsDisplayArray={this.state.artworksDisplayArray} />
                        
                        {moreArtworks}
                        {lessArtworks}
                    </div>
                </div>
            </React.Fragment>
        )
    
    }
}