import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={"header"}>
        <Navbar bg="white" expand="lg" style={{display: "flex"}}>
          <Navbar.Brand className={"header-logo"}>
            <span className={"header-logo-lg-view"}>The Good Concierge</span>
            <span className={"header-logo-sm-view"}>TGC</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={'justify-content-end'} style={{width: '100%'}}>
              <Nav.Link href="/About/">About</Nav.Link>
              <Nav.Link href="/Electronics/">Electronics</Nav.Link>
              <Nav.Link href="/Furniture/">Furniture</Nav.Link>
              <Nav.Link href="/Faq/">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
