import React from 'react'

class ChildComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "I am from Child Component"
        }
    }

    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <p>{this.props.data}</p>
                <button className="btn btn-sm btn-group" onClick={this.props.update.bind(this, this.state.message)}>Send to parent</button>
            </div>
        );
    }

}

export default ChildComponent;