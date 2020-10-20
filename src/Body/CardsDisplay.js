import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {ElectronicItems} from "../Inventory/Electronics/config.js";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CardsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  goToPage = (item) => {
    console.log("goToPage", './' + item.category + "/" + item.key);

    this.props.history.push('./' + item.category);
  }


  render() {
    return (
      <div align="center" style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <CardDeck>
          {
            ElectronicItems.filter(item => !item.disabled).map((item, i) =>
              <Card key={i} className={'card-display'} >
                <Link to={{
                  pathname: "/" + item.category,
                  itemKey: item.key
                }} >
                  <Card.Img variant="top" src={require('../Inventory/Electronics/' + item.imageMainUrl)} />
                </Link>

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <span style={{fontWeight:'bold'}}>${item.dailyRental}</span><span style={{fontSize: '2px'}}>/day~</span>
                  </Card.Text>
                  <Card.Text>
                    <Button className={'card-display-button'} onClick={() => this.props.addToCart(item)}>
                      Add
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          }

        </CardDeck>
      </div>
    );
  }
}

export default CardsDisplay;
