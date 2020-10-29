import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Badge from '@material-ui/core/Badge';
import { default as MaterialUiLink } from '@material-ui/core/Link';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.goToShoppingCart = this.goToShoppingCart.bind(this);
  }

  componentDidMount() {
  }

  goToShoppingCart = () => {
    this.props.history.push({
      pathname: './ShoppingCart'
    });
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
                  {/**
                  <MaterialUiLink as={Link} to="/ShoppingCart/">
                    <Badge badgeContent={this.props.shoppingCart.length} color="secondary">
                      <ShoppingCartTwoToneIcon />
                    </Badge>
                  </MaterialUiLink>
                   **/}
                  <Nav.Link as={Link} to="/ShoppingCart/" className={'navigation-badge-link'}>
                    <Badge badgeContent={this.props.shoppingCart.length} color="secondary">
                      <ShoppingCartTwoToneIcon />
                    </Badge>
                  </Nav.Link>
                </span>
                : ""
            }
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={'justify-content-end'} style={{width: '100%'}}>
              <Nav.Link className={'navigation-link'} as={Link} to="/About/">About</Nav.Link>
              <Nav.Link className={'navigation-link'} as={Link} to="/Electronics/">Electronics</Nav.Link>
              <Nav.Link className={'navigation-link'} as={Link} to="/Furniture/">Furniture</Nav.Link>
              <Nav.Link className={'navigation-link'} as={Link} to="/Faq/">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
