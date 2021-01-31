import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

class ProfileService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: this.props.service
    }
  }

  onChangeDisabledStatus = () => {
    let updatedService = this.state.service;
    updatedService.disabled = !updatedService.disabled;

    this.setState({
      service: updatedService
    });

    this.props.saveItemInfo(updatedService);
  }

  render() {

    let {
      key,
      changeToEditTab
    } = this.props;

    return (
      <div key={key} className={"profile-service"}>
        <span onClick={() => changeToEditTab(this.state.service)}>{this.state.service.category}</span>
        <BootstrapSwitchButton
          checked={!this.state.service.disabled}
          onlabel={"Live"}
          onChange={() => this.onChangeDisabledStatus()}
        />
      </div>
    );
  }
}

export default ProfileService;
