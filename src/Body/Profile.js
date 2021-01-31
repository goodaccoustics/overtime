import React, {Component} from 'react';
import { InventoryItems } from '../Inventory/Inventory';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as BootStrapImage } from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import { HideEmail } from '../Utilities/common';
import { SERVICE_TEMPLATE } from '../Utilities/templates';
import ProfileOtherUserInfo from './ProfileOtherUserInfo';
import ProfileAddInventory from './ProfileAddInventory';
import ProfileService from './ProfileService';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: null,

      selectedTab: "inventory",
      tabAddEditText: "Add",
      selectedService: SERVICE_TEMPLATE,

    }
  }

  componentWillMount() {
    console.log(this.props.user);
    this.props.setUserServices(this.props.user);
  }

  onTabSelect = (key) => {
    this.setState({
      selectedTab: key
    })

    if (key === "inventory") {
      this.props.setUserServices(this.props.user);
      this.setState({
        tabAddEditText: "Add",
        selectedService: SERVICE_TEMPLATE,
      })
    }

  }

  addItem = (item) => {
    this.props.saveItemInfo(item);
    this.onTabSelect("inventory");
  }

  changeToEditTab = (item) => {
    this.setState({
      tabAddEditText: "Edit",
      selectedService: item
    });
    this.onTabSelect("addEdit");
  }

  updateSelectedService = (item) => {
    this.setState({
      selectedService: item
    });
    this.props.saveItemInfo(item);
  }

  deleteItem = (item) => {
    this.props.deleteItem(item);
    this.onTabSelect("inventory");
  }

  render() {

    let {
      user,
      userServices,
      saveUserInfo,
      saveItemInfo
    } = this.props

    return (

      <div style={{margin: 'auto', padding: '1rem', justifyContent: 'center', maxWidth: '50rem'}}>

        <div style={{display: 'flex', backgroundColor: '#fcfcfc', padding:'5px'}}>

          <BootStrapImage src={user.photoURL} roundedCircle />
          <div style={{marginLeft: '1rem'}}>
            <div>{ user.displayName }</div>
            <div>{ HideEmail(user.email) }</div>
          </div>

        </div>

        <div style={{ marginTop: '10px', backgroundColor: '#fcfcfc', padding:'1rem'}}>
          <ProfileOtherUserInfo user={user} saveUserInfo={saveUserInfo}/>
        </div>

        <div style={{ marginTop: '10px', backgroundColor: '#fcfcfc', padding:'1rem'}}>

          <Tabs activeKey={this.state.selectedTab} className={'profile-tabs'} onSelect={this.onTabSelect}>
            <Tab eventKey="inventory" title="Your Services" style={{margin: 'auto'}}>
              {
                userServices && userServices.length > 0?
                  userServices.sort().map(service =>
                    <ProfileService key={service.key} service={service} saveItemInfo={saveItemInfo} changeToEditTab={this.changeToEditTab} />
                  )
                  :
                  <div style={{margin: 'auto', width:'50%', padding: '2rem'}} align="center">
                    <span onClick={() => this.onTabSelect('Add')}>Start Building Your Inventory!</span>
                  </div>
              }
            </Tab>
            <Tab eventKey="addEdit" title={this.state.tabAddEditText} style={{margin: 'auto'}}>
              <ProfileAddInventory item={this.state.selectedService} saveItemInfo={this.addItem} deleteItem={this.deleteItem} updateSelectedService={this.updateSelectedService} />
            </Tab>
          </Tabs>
        </div>

        <div style={{ marginTop: '10px', backgroundColor: '#fcfcfc', padding:'5px'}} align="center">
          <Button variant="danger" onClick={() => this.props.logout()}>Sign Out</Button>
        </div>

      </div>
    );
  }
}

export default Profile;
