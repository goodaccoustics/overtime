import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GOOGLE_API_KEY} from "../Utilities/constants";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {

    const mapStyles = {
      width: '100%'
    };


    return (
      <div style={{width: "500px", height: "500px"}}>
        <Map
          google={this.props.google}
          draggable={false}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={false}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: this.props.myLocation[0] , lng: this.props.myLocation[1] }}
        >
          <Marker position={{ lat: this.props.myLocation[0], lng: this.props.myLocation[1]}} />
          {
            this.props.servicesAroundMe && this.props.servicesAroundMe.map(service =>
              <Marker position={{ lat: service.userObject.geoLocation.split(",")[0], lng: service.userObject.geoLocation.split(",")[1]}} />
            )
          }
        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({apiKey: GOOGLE_API_KEY})(MapContainer);
