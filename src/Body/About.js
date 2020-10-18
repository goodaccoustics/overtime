import React, {Component} from 'react';
import AboutCarousel from './AboutCarousel'
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
      </div>
    );
  }
}

export default About;
