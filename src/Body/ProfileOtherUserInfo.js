import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { COUNTRIES } from "../Utilities/constants";


class ProfileOtherUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changed: false
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId="userLocation">
            <Form.Label column sm={3} className={'profile-form-label'}>
              Location
            </Form.Label>
            <Col sm={9} style={{margin: 'auto'}}>
              {
                this.props.userState === 'display' ?
                  this.props.user.userLocation ?
                    <span>{this.props.user.userLocation}</span>
                    :
                    <span>None</span>
                  :
                  <Form.Control as="select" custom>
                    {
                      COUNTRIES.map(x =>
                        <option>{x.name}</option>
                      )
                    }
                  </Form.Control>
              }
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="userWhatsapp">
            <Form.Label column sm={3} className={'profile-form-label'}>
              WhatsApp
            </Form.Label>
            <Col sm={9} style={{margin: 'auto'}}>
              {
                this.props.userState === 'display' ?
                  this.props.user.allowDirectChat ?
                    <span>{this.props.user.allowDirectChat}</span>
                    :
                    <span>None</span>
                  :
                  <div>
                    <Form.Control type="text" placeholder="Full number with country code" />
                    <Form.Text id="userWhatsappHelp" muted>
                      Fill in the country code and mobile number without '+' at the front and no spaces.
                    </Form.Text>
                  </div>
              }
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="userDeliveryPolicy">
            <Form.Label column sm={3} className={'profile-form-label'}>
              Delivery Policy
            </Form.Label>
            <Col sm={9} style={{margin: 'auto'}}>
              {
                this.props.userState === 'display' ?
                  this.props.user.allowDirectChat ?
                    <span>{this.props.user.allowDirectChat}</span>
                    :
                    <span>None</span>
                  :
                  <Form.Control type="text" placeholder="Fill in your Delivery Modes and Fees" />
              }
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ProfileOtherUserInfo;
