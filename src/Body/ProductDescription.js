import React, {Component} from 'react';
import Badge from 'react-bootstrap/Badge'
import { InventoryItems } from '../Inventory/Inventory'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDisplay from "./CardsDisplay";
import ShoppingCart from "../App";

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount() {
    //console.log(this.props.location);
  }

  render() {
    return (
      <p>In productDescription Page of {this.props.categoryType} with itemKey: {this.props.itemKey}</p>
    );
  }
}

export default ProductDescription;
