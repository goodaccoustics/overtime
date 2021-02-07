import React, {Component} from 'react';
import AboutCarousel from './AboutCarousel';
import CardsDisplay from './CardsDisplay';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import AboutCategory from "./AboutCategory";
import { CATEGORIES } from "../Utilities/templates";
import Button from "react-bootstrap/Button";
import Map from "./Map";
import GoogleApiWrapper from './Map';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      isGeoEnabled: false,
      myLocation: null
    }
  }

  componentDidMount() {
    this.FindLocation();
  }

  FindLocation = () => {
    this.setState({
      isGeoEnabled:false,
      myLocation: null
    });

    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(this.FindLocationSuccess)
    }
    else {
      console.log("Unavailable");
    }
  }

  FindLocationSuccess = (location) => {
    console.log("FindLocationSuccess: " + location);
    this.setState(
      {
        isGeoEnabled:true,
        myLocation: [location.coords.latitude.toFixed(8), location.coords.longitude.toFixed(8)]
      }
    )
    console.log("FindLocationSuccess: " + this.state.myLocation);
  }


  render() {
    return (
      <div>
        <AboutCarousel />
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            CATEGORIES.map(x =>
              <AboutCategory category={x} />
            )
          }
        </div>
        <hr/>
        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
          <p>Around You</p>
        </div>
        <div>
          {
            this.state.isGeoEnabled?
              <GoogleApiWrapper myLocation={this.state.myLocation}/>
              :
              <span>Enable your location to discover hustlers around you.</span>
          }

        </div>
        <div>
          <CardsDisplay category={"All"} addToCart={this.props.addToCart}  itemInCart={this.props.itemInCart} removeFromCart={this.props.removeFromCart} />
        </div>

      </div>
    );
  }
}

export default About;
