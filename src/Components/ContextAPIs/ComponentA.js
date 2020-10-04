import React from "react"
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="compA">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card p-2">
                                <div className="card-boy bg-info">
                                    <h1 className="p-2">Component A</h1>
                                    <ComponentB/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ComponentA;