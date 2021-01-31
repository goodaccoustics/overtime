import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

class ProfileService extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    let {
      service
    } = this.props;

    return (
      <div key={service.id} className={"profile-service"}>
        <span>{service.category}</span>
        <BootstrapSwitchButton
          checked={!service.disabled}
          onlabel={"Live"}
        />
      </div>
    );
  }
}

export default ProfileService;
