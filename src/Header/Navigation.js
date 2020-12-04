import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import Badge from '@material-ui/core/Badge';
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
        <Navbar collapseOnSelect="true" bg="white" expand="lg" style={{display: "flex"}}>

          <Navbar.Brand className={"header-logo"} style={{display: 'flex'}}>
            <span className={"header-logo-lg-view"}>The Good Concierge</span>
            <span className={"header-logo-sm-view"}>TGC</span>
            {
              this.props.shoppingCart && this.props.shoppingCart.length > 0 ?
                <span style={{marginLeft: '5px'}}>
                  <Nav.Link eventKey="0" as={Link} to="/ShoppingCart/" style={{padding: '1px'}} className={'navigation-badge-link'}>
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
              <Nav.Link eventKey="1" className={'navigation-link'} as={Link} to="/About/"><HomeIcon /></Nav.Link>
              {
                this.props.user?
                  <Nav.Link eventKey="2" className={'navigation-link'} as={Link} to="/Profile/"><PersonIcon /></Nav.Link>
                  :
                  <Nav.Link eventKey="3" className={'navigation-link'} onClick={() => this.props.login() }><VpnKeyIcon /></Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
