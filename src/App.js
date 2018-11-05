import React, { Component } from 'react';
import './App.css';
import Maincontent from './components/maincontent';
import {Col} from 'react-bootstrap';
import Home from './components/home';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import NavBar from './components/navbar'


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


// variable date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();


class App extends Component {
    constructor() {
        super();

        this.state={componentToShow:<div>home</div>,

        }

    }
    findWay =(Way) =>{
            console.log(Way);
           this.setState({componentToShow:<div>{Way}</div>})

    }
    render() {
        return (
            <div>
                <div className="navigation">
              <NavBar selectItemClick={this.findWay}/>
                </div>
                <div>
                    <Col mdOffset={1}>
                    <div className="headerservername">
                        <h2> Spyca serveur 1.29 </h2>
                        {today.toLocaleDateString("fr-FR", options)}
                    </div>
                    </Col>
                <Maincontent/>

                </div>


                {this.state.componentToShow}

            </div>


        );
    }
}

export default App;