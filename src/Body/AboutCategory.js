import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import DevicesOther from '@material-ui/icons/DevicesOther';
import SingleBed from '@material-ui/icons/SingleBed';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import StyleIcon from '@material-ui/icons/Style';
import EventIcon from '@material-ui/icons/Event';
import RoomServiceIcon from '@material-ui/icons/RoomService';

class AboutCategory extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <Nav.Link as={Link} to={"/" + this.props.category + "/"} style={{padding: '1px'}}>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Text>
                <div className={'about-card-Category'}>

                  <DevicesOther style={{display: this.props.category === "Electronics" ? 'flex' : 'none'}}/>
                  <SingleBed style={{display: this.props.category === "Furniture" ? 'flex' : 'none'}}/>
                  <LocalBarIcon style={{display: this.props.category === "Drinks" ? 'flex' : 'none'}}/>
                  <StyleIcon style={{display: this.props.category === "Fashion" ? 'flex' : 'none'}}/>
                  <EventIcon style={{display: this.props.category === "Events" ? 'flex' : 'none'}}/>
                  <RoomServiceIcon style={{display: this.props.category === "Services" ? 'flex' : 'none'}}/>

                  <span style={{marginLeft: '5px'}}>{this.props.category}</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Nav.Link>
      </div>
    );
  }
}

export default AboutCategory;
