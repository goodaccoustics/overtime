import React, {Component} from 'react';
import { InventoryItems } from '../Inventory/Inventory';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as BootStrapImage } from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import { HideEmail } from '../Utilities/common';
import ProfileOtherUserInfo from './ProfileOtherUserInfo';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      userState: 'edit', //display or edit
      inventory: null,

      selectedTab: "Inventory",
      addItem: null,
      editItem: null
    }
  }

  componentWillMount() {
    console.log(this.props.location);

    this.setState({
      user: this.props.user
    });

  }

  onTabSelect = (key) => {
    this.setState({
      selectedTab: key
    })
  }

  render() {

    return (

      <div style={{margin: 'auto', padding: '20px', justifyContent: 'center', maxWidth: '50rem'}}>

        <div style={{display: 'flex', backgroundColor: '#fcfcfc', padding:'5px'}}>

          <BootStrapImage src={this.state.user.photoURL} roundedCircle />
          <div style={{marginLeft: '1rem'}}>
            <div>{ this.state.user.displayName }</div>
            <div>{ HideEmail(this.state.user.email) }</div>
          </div>

        </div>

        <div style={{ marginTop: '10px', backgroundColor: '#fcfcfc', padding:'5px'}}>
          <ProfileOtherUserInfo user={this.state.user} userState={this.state.userState}/>
        </div>

        <div style={{ marginTop: '10px', backgroundColor: '#fcfcfc', padding:'5px'}}>

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
            <Tab eventKey="Add" title="Add">

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

      </div>
    );
  }
}

export default Profile;
