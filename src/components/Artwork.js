import React, { Component } from "react";
import { ARTWORKS } from "../shared/artworks";

function RenderItem({items, itemsDisplayArray, itemsPerScreen}) {
    const tempArray = itemsDisplayArray;
    return( 
        <ul className="row artworksList">
            {                 
                items.slice(0).reverse().map((item, index) => {
                    tempArray.indexOf(item) > -1 ? console.log('in array already') : tempArray.push(item) 
                    if (index < itemsPerScreen){
                        return (
                            <img src={item.image} alt={item.alt}/>
                        )
                    }
                    else {
                        return(null)
                    }
                })
            }
        </ul>
    )
}

function MoreButton(props) {
    return(
        <button className="btn moreArtworks" onClick={props.onClick}>
            Load More
        </button>
    )
}

function LessButton(props) {
    return(
        <button className="btn lessArtworks" onClick={props.onClick}>
            Show Less
        </button>
    )
}

export default class Artwork extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            artworksPerScreen: 4,
            artworks: ARTWORKS,
            artworksDisplayArray: [],
        }
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
        if (this.state.artworksPerScreen > 4) {
            lessArtworks = <LessButton onClick={this.decreaseArtworkCount} />
        } else {
            lessArtworks = null
        }
        return(
            <React.Fragment>
                <div className="artworks">
                    <div className="container">
                        <RenderItem items={this.state.artworks} itemsPerScreen={this.state.artworksPerScreen} itemsDisplayArray={this.state.artworksDisplayArray} />
                        
                    </div>
                    <div className="buttonHolder">
                        {moreArtworks}
                        {lessArtworks}
                    </div>
                </div>
            </React.Fragment>
        )
    
    }
}