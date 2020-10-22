import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { InventoryItems } from '../Inventory/Inventory'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDisplay from "./CardsDisplay";


class Electronics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location)
  }

  render() {
    return (
      this.props.location.itemKey ?
        // Show Item Page
        <p>In Electronics with key: {this.props.location.itemKey}</p>
        :
        // Show Main Page
        <div>
          <div>
            <p>Tags</p>
            <Tabs defaultActiveKey="home" transition={false} className={'tab-tags'}>
              <Tab eventKey="home" title="Home1">
                Home
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Profile
              </Tab>
              <Tab eventKey="contact" title="Contact">
                Contact
              </Tab>
            </Tabs>
          </div>
          <div>
            <CardsDisplay category={"Electronics"} addToCart={this.props.addToCart}  />
          </div>
        </div>

    );
  }
}

export default Electronics;
