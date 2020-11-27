import React, {Component} from 'react';
import { Image } from 'cloudinary-react';
import { InventoryItems } from '../Inventory/Inventory';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import { CLOUDINARY_CLOUDNAME, CHAT_NUMBER } from '../Utilities/constants';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChatWidget from "./ChatWidget";


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
          <Image cloudName={CLOUDINARY_CLOUDNAME} publicId={this.state.mainImage.imageUrl}
                 className="d-block w-100"
                 style={{minWidth: '15rem', maxWidth: '40rem', marginBottom: '2px'}}
          />
          <div className={'pd-caption'}>{this.state.mainImage.caption}</div>
          <CardDeck style={{display: 'flex', flexWrap: 'wrap', paddingLeft: '10px'}}>
            {
              this.state.subImages.map((item, i) =>
                <Card
                  key={i}
                  style={{minWidth:'6rem', maxWidth:'6rem', margin:'5px'}}
                  onClick={() => this.setMainImage(item) }
                >
                  {/**
                   <Card.Img src={require('../Inventory/' + this.props.categoryType + '/' + item.imageUrl)} />
                   **/}
                  <Image cloudName={CLOUDINARY_CLOUDNAME} publicId={item.imageUrl}
                         style={{minWidth:'5rem', maxWidth:'5rem', margin: 'auto'}}
                  />
                </Card>
              )
            }
          </CardDeck>
        </div>

        <div style={{ margin: '10px', backgroundColor: '#fcfcfc', padding:'5px'}}>
          <Card className={'pd-cart-pane'} style={{borderWidth:0, backgroundColor:'#fcfcfc'}} >
            <Card.Body>
              {/**
               <Card.Title>Card Title</Card.Title>
               **/}
              {
                this.state.item.productFeatures && this.state.item.productFeatures.length > 0 ?
                  <div style={{marginBottom: '20px'}}>
                    <Card.Subtitle className="mb-2 text-muted">Product Features</Card.Subtitle>
                    <Card.Text style={{display:"flex",flexWrap:"wrap"}}>
                      {
                        this.state.item.productFeatures.map(x =>
                          <div className={'pd-product-features'}>
                            <RadioButtonUncheckedIcon style={{fontSize: 10, marginRight: '2px', marginBottom: '4px'}} color="primary" />{x}
                          </div>)
                      }
                    </Card.Text>
                  </div>
                  :
                  ""
              }

              <Card.Subtitle className="mb-2 text-muted">More Info</Card.Subtitle>
              <Card.Text>
                Visit Product Website
              </Card.Text>
              <Card.Text align={'center'} className={'pd-buy-card'}>
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
        <ChatWidget number={CHAT_NUMBER} itemTitle={this.state.item.title}/>
      </div>
    );
  }
}

export default ProductDescription;
