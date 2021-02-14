import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { InventoryItems } from "../Inventory/Inventory";
import PriceDisplay from "./PriceDisplay";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { CLOUDINARY_CLOUDNAME } from '../Utilities/constants';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {default as BootStrapImage} from "react-bootstrap/Image";

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
          {/**
            InventoryItems(this.props.category, this.props.hashTag).map((item, i) =>
              <Card key={i} className={'card-display'}  style={{minWidth: '15rem', maxWidth:'15rem', marginBottom: '20px'}}>
                <Card.Body style={{minHeight: '15rem', padding: '10px'}}>
                  <Link
                    to={{
                      pathname: "/" + item.category,
                      itemKey: item.key
                    }} >
                    <Image cloudName={CLOUDINARY_CLOUDNAME} publicId={item.imagesUrl[0].imageUrl} width="200" crop="scale" />
                  </Link>
                </Card.Body>

                <Card.Body>
                  <Card.Title align={'left'}>{item.title}</Card.Title>
                  <Card.Text>
                    <PriceDisplay priceSettings={item.priceSettings}/>
                  </Card.Text>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
            )
          **/}
          {
            this.props.servicesAroundMe.map((service, i) =>
              <Card key={i} className={'card-display'}  style={{minWidth: '15rem', maxWidth:'5rem'}}>
                <Card.Body style={{minHeight: '5rem'}}>
                  <div style={{display:'flex'}}>
                    <div style={{marginRight: '5px'}}>
                      <BootStrapImage src={service.userObject.photoURL} roundedCircle />
                    </div>
                    <div >
                      <div>{service.category}</div>
                      <div>{service.userObject.displayName}</div>
                    </div>
                  </div>
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
