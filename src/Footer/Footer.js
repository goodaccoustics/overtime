import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={"footer"} align="center">
        <span style={{color: "#b4b4b4"}}>© OverTime 2021</span>
      </div>
    );
  }

}

export default Footer;
