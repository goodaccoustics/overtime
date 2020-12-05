import React, {Component} from 'react';
import { InventoryItems } from '../Inventory/Inventory';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as BootStrapImage } from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import { HideEmail } from '../Utilities/common';
import ProfileOtherUserInfo from './ProfileOtherUserInfo';
import ProfileAddInventory from './ProfileAddInventory';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: null,

      selectedTab: "Inventory",
      addItem: null,
      editItem: null
    }
  }

  componentWillMount() {
    console.log(this.props.user);
  }

  onTabSelect = (key) => {
    this.setState({
      selectedTab: key
    })
  }

  render() {

    let {
      user,
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
            <Tab eventKey="Inventory" title="Inventory" style={{margin: 'auto'}}>
              {
                this.state.inventory && this.state.inventory.length > 0?
                  ""
                  :
                  <div style={{margin: 'auto', width:'50%', padding: '2rem'}} align="center">
                    <span onClick={() => this.onTabSelect('Add')}>Start Building Your Inventory!</span>
                  </div>
              }


            </Tab>
            <Tab eventKey="Add" title="Add" style={{margin: 'auto'}}>
              <ProfileAddInventory saveItemInfo={saveItemInfo} />
            </Tab>
            {
              this.state.editItem?
                <Tab eventKey="Edit" title="Edit">

                </Tab>
                :
                ""
            }
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
