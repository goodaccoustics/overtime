import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import AboutCarousel from './AboutCarousel';
import CardsDisplay from './CardsDisplay';
import DevicesOther from '@material-ui/icons/DevicesOther';
import SingleBed from '@material-ui/icons/SingleBed';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartTwoToneIcon from "../Header/Navigation";
import {Link} from "react-router-dom";


class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <AboutCarousel />
        <div style={{display: 'flex', justifyContent: 'center'}}>

          <Nav.Link as={Link} to="/Electronics/" style={{padding: '0px'}}>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Text>
                  <div className={'about-card-Category'}>
                    <DevicesOther />
                    <span style={{marginLeft: '5px'}}>Electronics</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Nav.Link>

          <Nav.Link as={Link} to="/Furniture/" style={{marginLeft: '5px', padding: '0px'}}>
            <Card style={{ width: '10rem'}}>
              <Card.Body>
                <Card.Text>
                  <div className={'about-card-Category'}>
                    <SingleBed />
                    <span style={{marginLeft: '5px'}}>Furniture</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Nav.Link>

        </div>
        <hr/>
        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
          <p>Recommended</p>
        </div>
        <div>
          <CardsDisplay category={"All"} addToCart={this.props.addToCart}  itemInCart={this.props.itemInCart} removeFromCart={this.props.removeFromCart} />
        </div>

      </div>
    );
  }
}

export default About;
