import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./CardsDisplay";


class PriceDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const {
      type,
      currencySymbol,
      currency,
      price,
      newPrice
    } = this.props.priceSettings;

    switch(type) {
      case 'dailyRental':
        return (
          <div>
            <span style={{fontWeight:'bold'}}>
              {currencySymbol + price}
            </span>
            <span style={{fontSize: '2px'}}>
              /day~
            </span>
          </div>
        );
        break;
    }
  }
}

export default PriceDisplay;
