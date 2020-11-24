import React, {Component} from 'react';
import { Image } from 'cloudinary-react';
import { InventoryItems } from '../Inventory/Inventory';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
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

  setMainImage = (item) => {
    this.setState({
      mainImage: item
    })
  }

  render() {

    return (

      <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px', justifyContent: 'center'}}>

        <div>
          <div className={'pd-title'}>{this.state.item.title}</div>

          {/**
           <img
           alt={this.state.mainImage.imageUrl}
           className="d-block w-100"
           src={require('../Inventory/Electronics/' + this.state.mainImage.imageUrl)}
           style={{minWidth: '15rem', maxWidth: '40rem', marginBottom: '2px'}}
           />
           **/}
          <Image cloudName="goodaccoustics" publicId={this.state.mainImage.imageUrl}
                 className="d-block w-100"
                 style={{minWidth: '15rem', maxWidth: '40rem', marginBottom: '2px'}}
          />
          <div className={'pd-caption'}>{this.state.mainImage.caption}</div>
          <CardDeck style={{display: 'flex', flexWrap: 'wrap', paddingLeft: '10px'}}>
            {
              this.state.subImages.map((item, i) =>
                <Card
                  key={i}
                  style={{minWidth:'5rem', maxWidth:'5rem', margin:'5px'}}
                  onClick={() => this.setMainImage(item) }
                >
                  {/**
                   <Card.Img src={require('../Inventory/' + this.props.categoryType + '/' + item.imageUrl)} />
                   **/}
                  <Image cloudName="goodaccoustics" publicId={item.imageUrl}
                         style={{minWidth:'4rem', maxWidth:'4rem'}}
                  />
                </Card>
              )
            }
          </CardDeck>
        </div>

        <div style={{ margin: '5px', backgroundColor: '#fcfcfc', padding:'5px'}}>
          <Card className={'pd-cart-pane'} style={{borderWidth:0, backgroundColor:'#fcfcfc'}} >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Text align={'center'}>
                {
                  this.props.itemInCart(this.state.item) ?
                    <Button className={'card-display-negative-button'}
                            onClick={() => this.props.removeFromCart(this.state.item)}
                            style={{width:'200px'}}
                    >
                      Remove
                    </Button>
                    :
                    <Button className={'card-display-button'}
                            onClick={() => this.props.addToCart(this.state.item)}
                            style={{width:'200px'}}
                    >
                      Add
                    </Button>
                }
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
