import React from 'react';
import './App.css';
import ParentComponent from "./Components/Interaction/ParentComponent";
//import ChildComponent from "./Components/Interaction/ChildComponent";
import CardOne from "./Components/Interaction/CardOne";
import ComponentA from "./Components/ContextAPIs/ComponentA";
import UserContext from './Components/ContextAPIs/UserContext'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo :{
                author: "Venky",
                channel: "UI Technologies"
            }
        }
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="/" className="navbar-brand"> Interaction & Context API & Lifecycle</a>
                </nav>
                <ParentComponent />
                <CardOne />
               <div className="container my-3">
                   <div className="row">
                       <div className="col">
                           <div className="card">
                               <div className="card-body bg-danger text-white">
                                   <h3>App Component</h3>
                                   <pre>{JSON.stringify(this.state.userInfo)}</pre>
                                   <UserContext.Provider value={this.state.userInfo}>
                                       <ComponentA/>
                                   </UserContext.Provider>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

            </div>
        );
    }
}

export default App;
