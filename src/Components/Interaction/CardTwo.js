import React from "react"

class CardTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            colors: ["silver", "gray"]
        }
    }

    render() {
        return (
            <div>
                <button className="btn btn-success btn-sm" onClick={this.props.update.bind(this, this.state.colors)}>Push Colors</button>
            </div>
        );
    }

}
export default CardTwo;
