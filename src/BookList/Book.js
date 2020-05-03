import React from "react";
import "./Book.css"

export default class Book extends React.Component {
    render() {

 

        return (
            <div id={this.props.key} className="book">
                <img src={this.props.thumbnail} alt={this.props.title} />
                <h3>{this.props.title}</h3>
                <p>{this.props.authors}</p>
                <p>{this.props.price}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}