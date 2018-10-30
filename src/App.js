import React, { Component } from 'react';
import './App.css';

import Home from './components/home';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import NavBar from './components/navbar'


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
              <NavBar selectItemClick={this.findWay}/>


                {this.state.componentToShow}

            </div>


        );
    }
}

export default App;