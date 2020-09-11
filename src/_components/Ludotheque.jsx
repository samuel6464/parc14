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

import cpvAr from '../assets/CD/compilevintage-AR.jpg';


var fn = function () {
    /* do you want */
}



class Ludotheque extends React.Component {




    render() {
        return (
            < div >

                < Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    <div
                        onClick={() => fn()}
                        onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0"
                    >
                        <img
                            src={cpvAr}
                            alt='title or description'
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />

                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />

                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src={cpvAr} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                </  Coverflow>
            </div >

        )
    }
}

export { Ludotheque };