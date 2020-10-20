import React, {Component} from 'react';
import AboutCarousel from './AboutCarousel';
import CardsDisplay from './CardsDisplay';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <hr/>
        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
          <p>Recommended</p>
        </div>
        <CardsDisplay addToCart={this.props.addToCart} />
      </div>
    );
  }
}

export default About;
