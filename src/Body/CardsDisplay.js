import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { InventoryItems } from "../Inventory/Inventory";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CardsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  goToPage = (item) => {
    console.log("goToPage", './' + item.category + "/" + item.key);
    this.props.history.push('./' + item.category);
  }

  render() {
    return (
      <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <CardDeck align={"center"} style={{justifyContent:'center'}}>
          {
            InventoryItems(this.props.category, this.props.hashTag).map((item, i) =>
              <Card key={i} className={'card-display'}  style={{minWidth: '15rem', maxWidth:'15rem', marginBottom: '20px'}}>
                <Link to={{
                  pathname: "/" + item.category,
                  itemKey: item.key
                }} >
                  <Card.Img variant="top" src={require('../Inventory/Electronics/' + item.imageMainUrl)} />
                </Link>

                <Card.Body>
                  <Card.Title align={'left'}>{item.title}</Card.Title>
                  <Card.Text>
                    <span style={{fontWeight:'bold'}}>${item.dailyRental}</span><span style={{fontSize: '2px'}}>/day~</span>
                  </Card.Text>
                  <Card.Text>
                    {
                      this.props.itemInCart(item) ?
                        <Button className={'card-display-negative-button'} onClick={() => this.props.removeFromCart(item)}>
                          Remove
                        </Button>
                        :
                        <Button className={'card-display-button'} onClick={() => this.props.addToCart(item)}>
                          Add
                        </Button>
                    }
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
