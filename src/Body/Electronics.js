import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Electronics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location)
  }

  render() {
    return (
      <p>In Electronics with key: {this.props.location.itemKey}</p>
    );
  }
}

export default Electronics;
