import React from 'react'
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:"this is from parent Component",
            text : ""
        }
    }

    updateMessage = (message) => {
        this.setState({
            text: message
        })
    }

    render() {
        return (
            <div>
                <h3>Parent Component : {this.state.text}</h3>
                <ChildComponent data={this.state.msg} update = {this.updateMessage}/>
            </div>
        );
    }
}

export default ParentComponent;