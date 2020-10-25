import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Navigation extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("in Navigation", this.props );
  }

  render() {
    return (
      <div className={"header"}>
        <Navbar bg="white" expand="lg" style={{display: "flex"}}>
          <Navbar.Brand className={"header-logo"} style={{display: 'flex'}}>
            <span className={"header-logo-lg-view"}>The Good Concierge</span>
            <span className={"header-logo-sm-view"}>TGC</span>
            {
              this.props.shoppingCart && this.props.shoppingCart.length > 0 ?
                <span style={{marginLeft: '5px'}}>
                  <Link href="/ShoppingCart/">
                    <Badge badgeContent={this.props.shoppingCart.length} color="secondary">
                      <ShoppingCartTwoToneIcon />
                    </Badge>
                  </Link>
                </span>
                : ""
            }
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={'justify-content-end'} style={{width: '100%'}}>
              <Nav.Link className={'navigation-link'} href="/About/">About</Nav.Link>
              <Nav.Link className={'navigation-link'}  href="/Electronics/">Electronics</Nav.Link>
              <Nav.Link className={'navigation-link'}  href="/Furniture/">Furniture</Nav.Link>
              <Nav.Link className={'navigation-link'}  href="/Faq/">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
