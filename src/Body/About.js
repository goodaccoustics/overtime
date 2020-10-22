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
        <div>
          <CardsDisplay category={"All"} addToCart={this.props.addToCart} />
        </div>

      </div>
    );
  }
}

export default About;
