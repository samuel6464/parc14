import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/parc14Logo.png';

class Header extends React.Component {




    render() {
        return (
            <div>
                <div className="">
                    <div className="">
                        <Router>
                            <Navbar style={{ marginBottom: 0 }} bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">
                                    <img src={logo} style={{ width: 140, marginTop: 7 }} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#">Artistes</Nav.Link>
                                        <Nav.Link href="#">Label</Nav.Link>
                                        <Nav.Link href="#">Service</Nav.Link>
                                        <Nav.Link href="#">Contact</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>


                        </Router>
                    </div>
                </div>
            </div >
        )
    }
}

export { Header };