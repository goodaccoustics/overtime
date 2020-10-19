import React, {Component} from 'react';
import {ElectronicItems} from "../Inventory/Electronics/config.js";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const path = process.env.PUBLIC_URL;

class CardsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div align="center" style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <CardDeck>
          {
            ElectronicItems.map((item, i) =>
              <Card key={i} className={'card-display'}>
                <Card.Img variant="top" src={require('../Inventory/Electronics/' + item.imageMainUrl)} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <span style={{fontWeight:'bold'}}>${item.dailyRental}</span><span style={{fontSize: '2px'}}>/day~</span>
                  </Card.Text>
                  <Card.Text>
                    <Button className={'card-display-button'}>
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
