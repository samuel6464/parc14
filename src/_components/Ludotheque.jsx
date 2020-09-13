import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/parc14Logo.png';


import ReactDOM from 'react-dom'
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';



import cpvAR from '../assets/CD/compilevintage-AR.jpg';

import iAR from '../assets/CD/incognito-AR.jpg';
import sAR from '../assets/CD/slow-AR.jpg';
import mqAR from '../assets/CD/maquete-AR.jpg';
import lrAR from '../assets/CD/LoveR-AR.jpg';

import dtS2B from '../assets/CD/distanteTools-S2B.jpg';
import enS2B from '../assets/CD/exNihilo-S2B.jpg'

import style from '../all.css';
import { Link } from "react-router-dom";



var fn = function () {
    /* do you want */
}




class Ludotheque extends React.Component {




    render() {

        return (
            < div >
                <div className="swipe-div">
                    <Coverflow
                        displayQuantityOfSide={1}
                        navigation
                        infiniteScroll
                        enableHeading
                        currentFigureScale='1'
                        otherFigureScale='0.7'
                        media={{
                            '@media (max-width: 900px)': {
                                width: 'auto',
                                height: 'auto'
                            },
                            '@media (min-width: 900px)': {
                                width: 'auto',
                                height: 'auto'
                            }
                        }}
                    >
                        <div
                            onClick={() => fn()}
                            onKeyDown={() => fn()}
                            role="menuitem"
                            tabIndex="0"
                        >
                            <Link to="/artist">

                                <img
                                    src={cpvAR}
                                    alt='title or description'
                                    style={{ display: 'block', width: '100%' }}
                                />
                            </Link>

                        </div>

                        <Link to="/artist">
                            <img src={mqAR} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        </Link>
                        <img src={lrAR} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={sAR} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={iAR} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={dtS2B} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />

                        <img src={enS2B} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />

                    </  Coverflow>
                </div>

                <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=6177681&app_id=1" width="350" height="350"></iframe>
            </div >

        )
    }
}

export { Ludotheque };