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
          <Navbar.Brand className={"header-logo"}>The Good Concierge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
