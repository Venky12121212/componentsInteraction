import React from "react"
import ComponentC from "./ComponentC";
import UserContext from "./UserContext";


class ComponentB extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h3>Component B</h3>
                                    <UserContext.Consumer>
                                        {
                                            (userInfo) => {
                                                return (
                                                    <ul>
                                                        <li>Author: {userInfo.author}</li>
                                                        <li>Channel: {userInfo.channel}</li>
                                                    </ul>
                                                )
                                            }
                                        }
                                    </UserContext.Consumer>
                                    <ComponentC />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default ComponentB;