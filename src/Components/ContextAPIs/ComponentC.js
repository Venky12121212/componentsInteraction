import React from "react";
import UserContext from './UserContext';

class ComponentC extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                  <div className="col">
                      <div className="card">
                          <div className="card-boy bg-dark">
                              <h1>Component C</h1>
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
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        );
    }

}

export default ComponentC;