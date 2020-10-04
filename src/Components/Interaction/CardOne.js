import React from "react"
import CardTwo from "./CardTwo";

class CardOne extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            colors : ["white", "red", "blue" , "orange"],
        }

    }
    newArray = (array) => {
        let newColors = [...this.state.colors, ...array]
        this.setState({
            colors : newColors
        })
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body bg-info">
                                <h3>Push new Array data to existing Array</h3>
                                <ul className="list-group">
                                    {
                                        this.state.colors.map((color) =>{
                                            return (
                                                <li className="list-group-item">{color}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <CardTwo update={this.newArray}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CardOne;