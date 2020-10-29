import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Furniture extends Component {
  constructor(props) {
    super(props);

    console.log("in Furniture", this.props );
  }

  componentDidMount() {

  }

  render() {
    return (
      <p>In Furniture</p>
    );
  }
}

export default Furniture;
