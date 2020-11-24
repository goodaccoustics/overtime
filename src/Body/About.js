import React, {Component} from 'react';
import AboutCarousel from './AboutCarousel';
import CardsDisplay from './CardsDisplay';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import AboutCategory from "./AboutCategory";


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AboutCarousel />
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <AboutCategory category="Tickets" />
          <AboutCategory category="Fashion" />
          <AboutCategory category="Drinks" />
          <AboutCategory category="Electronics" />
          <AboutCategory category="Furniture" />
          <AboutCategory category="Events" />
          <AboutCategory category="Services" />
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
