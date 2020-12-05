import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { COUNTRIES } from "../Utilities/constants";
import FormField from "./FormField";


class ProfileOtherUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changed: false
    }
  }

  componentWillMount() {
    console.log("ProfileOtherUserInfo - user", this.props.user);
  }

  render() {

    let {
      user,
      saveUserInfo
    } = this.props;

    return (
      <div>
        <FormField type={"select"} options={COUNTRIES.map(x => x.name)} id={"userLocation"} label={"Location"} value={user.userLocation} placeholder={""} saveObject={saveUserInfo} required/>
        <FormField type={"text"} id={"whatsapp"} label={"WhatsApp"} value={user.whatsapp} placeholder={""} saveObject={saveUserInfo} required />
        <FormField type={"text"} id={"deliveryPolicy"} label={"Delivery Policy"} value={user.deliveryPolicy} placeholder={""} saveObject={saveUserInfo} required />
      </div>
    );
  }
}

export default ProfileOtherUserInfo;
