import React, {Component} from 'react';
import Badge from 'react-bootstrap/Badge'
import { InventoryItems } from '../Inventory/Inventory'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: null,
      subImages: []
    }
  }

  componentWillMount() {
    console.log(this.props.location);

    let item = InventoryItems(this.props.categoryType, null).find((item) =>
      item.category ===  this.props.categoryType &&
      item.key === this.props.itemKey);

    this.setState({
      item: item,
      mainImage:item.imagesUrl[0],
      subImages:item.imagesUrl
    });
  }

  render() {



    return (

      <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px', justifyContent: 'center'}}>

        <div>
          <span className={'pd-title'}>{this.state.item.title}</span>
          <img
            className="d-block w-100"
            src={require('../Inventory/Electronics/' + this.state.mainImage.imageUrl)}
            style={{minWidth: '15rem', maxWidth: '40rem', marginBottom: '2px'}}
          />
          <span className={'pd-caption'}>{this.state.mainImage.caption}</span>
          <CardDeck style={{display: 'flex', flexWrap: 'wrap', paddingLeft: '10px'}}>
            {
              this.state.subImages.map((item, i) =>
                <Card key={i} style={{minWidth:'5rem', maxWidth:'5rem', margin:'5px'}}>
                  <Card.Img src={require('../Inventory/' + this.props.categoryType + '/' + item.imageUrl)} />
                </Card>
              )
            }
          </CardDeck>
        </div>

        <div>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default ProductDescription;