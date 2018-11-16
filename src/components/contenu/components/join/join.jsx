import React, {Component} from 'react';
import {Button} from 'primereact/button';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './join.css';


class Join extends Component {
    x =  document.getElementsByClassName('btnmac');

    downloadAction(){
        document.getElementById('linkwindowslauncher').click();
    }
    render() {
        return (
            <div className="stepone">
                <h1>
                    Telecharger le client dofus
                </h1>
                <div className="oschoice">
                    <h2>Choisissez votre OS</h2>
                    {/*pour download mettre le bouton à l interieur du a href qui pointe vers le lien cible*/}
                    <a href="config.txt" id="linkwindowslauncher" download="ok.txt" >   </a>

                        <Button
                            label="Windows"
                            icon='pi pi-cloud-download'
                            className="btnwindow"
                            onClick="document.getElementById('linkwindowslauncher').click()"/>
                    <Button label="Mac" icon='pi pi-cloud-download' className="btnmac" onClick={() => this.downloadAction()}/>
                </div>
            </div>
        );
    }
}

export default Join;
