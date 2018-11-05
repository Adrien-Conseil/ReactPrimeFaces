import React, {Component} from 'react';

// import primefaces component & stylesheet
import {Menubar} from 'primereact/menubar';
import './navbar.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



// import des composant voué à la redirection
import Home from "./home";

class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            items: [
                {
                    label: 'ACCUEIL',

                    icon: 'pi pi-fw pi-home',
                    command: () => {
                        this.props.selectItemClick(<Home/>)
                    }
                },
                {
                    label: 'NOUS REJOINDRE',
                    icon: 'pi pi-fw pi-user-plus',
                    command: () => {
                        this.props.selectItemClick(<Home/>)
                    }
                },

                {
                    label: 'LADDER',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'PVM',

                        },
                        {
                            label: 'PVP',

                        },
                        {
                            label: 'GUILDE',

                        },
                        {
                            label: 'METIER',
                            // ITEMS POUR CHAQUE METIERS OU PAGE DE CHOIX
                        },

                    ]
                },

                {
                    label: 'VOTE',
                    icon: 'pi pi-fw pi-bookmark',
                    command: () => {
                        this.props.selectItemClick(<Home/>)
                    }
                },


                {
                    label: 'L\'ÉQUIPE',
                    icon: 'pi pi-fw pi-user',

                },
                {
                    label: 'BARBOK',
                    icon: 'pi pi-fw pi-info',
                    url:"https://barbok.eratz.fr/"

                },

                {
                    label: 'CONNEXION',
                    icon: 'pi pi-fw pi-power-off'
                    // a changer en DECONNEXION une fois connecté

                    // faire apparaitre un autre onglet "boutique" une fois connecté
                }
            ]
        };
    }

    render() {

        return (
            <Menubar model={this.state.items}/>
        )
    }


}

export default NavBar;
