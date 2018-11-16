import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Article from './components/article/article';
import './maincontent.css';



class Maincontent extends Component {
    render() {
        return (
            <div className="maindiv">
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={1} md={8} mdOffset={1}  className="contain">
                        <Col md={3} xs={10}>
                            <div className="divdiscord">
                                <iframe src="https://discordapp.com/widget?id=369903883658461203&theme=light" width="100%"
                                        height="400" allowTransparency="true" frameBorder="0"></iframe>
                            </div>
                            <div className="infoconnection">
                                <h2>Mon compte</h2>
                                <ul>
                                    <li>
                                        hakuna matata
                                    </li>
                                    <li>
                                        Mais quelle phrase magnifique
                                    </li>
                                    <li>
                                        Hakuna Matata
                                    </li>
                                    <li>
                                        Quel chant fantastique
                                    </li>
                                    <li>
                                        Ces mots signifient
                                    </li>
                                    <li>
                                        Que tu vivras ta vie
                                    </li>
                                    <li>
                                        Sans aucun souci
                                    </li>
                                    <li>
                                        Philosophie
                                    </li>
                                    <li>
                                        Hakuna Matata
                                    </li>

                                </ul>
                            </div>
                        </Col>
                        <Col md={8} xs={10}>
                        <div className="maincontainer">
                            {this.props.componenttoshow}
                        </div>
                        </Col>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default Maincontent;