import React, { Component } from 'react';
import './App.css';
import Maincontent from './components/contenu/maincontent';
import {Col} from 'react-bootstrap';
import Home from './components/contenu/components/home/home';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import NavBar from './components/navbar/navbar'


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
                    {/* passage du component à mettre dans le corps de la page en props */}
                    <Maincontent componenttoshow={this.state.componentToShow}/>
                </div>
            </div>


        );
    }
}

export default App;