import React, { Component, Touch } from "react";
import { render } from "react-dom";
import Clock from "./Clock";

class MyComponent extends Component {
    handleTouchStart = (event) => {
        console.log('Touch started');
    }

    render(){
        return(
            <div onTouchStart={this.handleTouchStart}>Touch me</div>
        );
    }
}

export default Touch;