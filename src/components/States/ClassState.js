import React, { Component } from "react";
export class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };  
    }
    incementCount= ()=> {
        this.setState({count: this.state.count+1})
    }
    render() {
        return ( 
            <div>
                <p>Count : {this.state.count} </p>
                <button onClick={this.incementCount}> Click to increase couter</button>
            </div>
        )
    }
}