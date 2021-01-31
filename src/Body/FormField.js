import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import AddLocationIcon from '@material-ui/icons/AddLocation'
import AddIcon from '@material-ui/icons/Add';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import '../App.css';
import {COUNTRIES, GOOGLE_API_KEY} from "../Utilities/constants";
import Badge from 'react-bootstrap/Badge';
//import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUncheckedIcon';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class FormField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
      value: this.props.value,

      geoLoading: false,
      geoModal: false,
      geoLocation: [0, 0]

    }

  }

  componentDidMount() {
    if (this.props.id === 'geoLocation') {
      this.LoadGeoLocationScript();
    }
  }

  removeMeFromArray = (value) => {
    let editedArray = this.state.value;
    editedArray = editedArray.filter(x => x!==value);
    this.setState({
      value: editedArray
    });
  }


  toggleToEditMode = (reset) => {

    if (this.state.isEditMode && !reset) {
      if (this.props.type === "text") {
        this.props.saveObject(this.props.id, this.state.value);
      }
      else if (this.state.value) {
        this.props.saveObject(this.props.id, this.state.value);
      }
    }

    this.setState ({
      isEditMode: !this.state.isEditMode
    });
  }

  onChange = (e) => {
    //console.log(this.props.id, e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  onChangeForText = (e) => {
    //console.log(this.props.id, e.target.value);
    this.setState({
      value: e.target.value.trim() === "" ? null : e.target.value
    });
  }

  onChangeForArray = (e) => {
    console.log(e.target.value);
    let input = e.target.value.trimLeft();
    if (input.indexOf(' ') > 0) {
      let existingTags = this.state.value;
      let newTag = input.substring(0, input.indexOf(' ')).trim().toLowerCase();
      if (!existingTags.includes(newTag)) {
        existingTags.push(input.substring(0, input.indexOf(' ')).trim());
      }
      this.setState({
        value: existingTags
      });
      this.inputText.value = "";
    }
  }

  addItemToArray = () => {
    let input = this.inputText.value.trim();

    let existingTags = this.state.value;
    if (!existingTags.includes(input)) {
      existingTags.push(input);
    }
    this.setState({
      value: existingTags
    });
    this.inputText.value = "";
  }

  FindLocation = () => {
    this.setState({
      geoLoading:true
    });
    navigator.geolocation.getCurrentPosition(this.FindLocationSuccess)
  }

  FindLocationSuccess = (location) => {
    console.log(location);
    this.setState(
      {
        geoLoading:false,
        value: location.coords.latitude.toFixed(8) + "," + location.coords.longitude.toFixed(8)
      }
    )
  }

  ShowGeoModal = () => {
    console.log("ShowGeoModal: " + this.state.value);
    this.setState({
      geoModal: !this.state.geoModal,
      //geoLocation : {
      //  lat: this.state.value.split(",")[0],
      //  lng: this.state.value.split(",")[1],
      //}
      geoLocation: [this.state.value.split(",")[0], this.state.value.split(",")[1]]
    })
  }

  LoadGeoLocationScript = () => {

  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId={this.props.id} style={{display: 'flex'}}>
            <Form.Label column sm={3} className={'profile-form-label'}>
              {
                this.props.required?
                  <b>{this.props.label}</b>
                  :
                  <>{this.props.label}</>
              }
            </Form.Label>
            <Col sm={8} className={'profile-form-display'}>
              {
                !this.state.isEditMode ?
                  <div onClick={() => this.props.disallowClickEdit? null : this.toggleToEditMode(true)} >
                    {this.renderFormDisplay()}
                  </div>
                  :
                  this.renderFormControl()
              }
              {
                !this.state.isEditMode ?
                  <div onClick={() => this.toggleToEditMode(true)} style={{padding: '5px'}}>
                    <EditIcon fontSize={"small"} />
                  </div>
                  :
                  <div style={{display: 'flex', flexWrap: 'nowrap', padding: '5px'}} >
                    <SaveIcon onClick={() => this.toggleToEditMode(false)} />
                    <SettingsBackupRestoreIcon onClick={() => this.toggleToEditMode(true)}  style={{marginLeft: '5px'}} />
                  </div>
              }
            </Col>
          </Form.Group>
        </Form>
        <Modal show={this.state.geoModal} onHide={this.ShowGeoModal}>
          <Modal.Header closeButton>
            <Modal.Title>Your Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
                center={this.state.geoLocation}
                defaultZoom={100}
              >
                <AnyReactComponent
                  lat={this.state.geoLocation[0]}
                  lng={this.state.geoLocation[1]}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.ShowGeoModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  renderFormControl() {
    if (this.props.type === "geoLocation") {
      if (navigator.geolocation) {
        return (
          <div>
            <span onClick={() => this.ShowGeoModal() }>{this.state.value}</span>
            {
              !this.state.geoLoading?
                <Button variant="link" onClick={() => this.FindLocation()} style={{fontSize: '4px'}}>Detect</Button>
                :
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"
                         style={{marginLeft: '8px'}}
                />
            }
          </div>
        );
      } else {
        return (
          <span>This app requries geolocation. Please enable.</span>
        );
      }
    }
    if (this.props.type === "text") {
      return (
        <Form.Control type="text" defaultValue={this.props.value} placeholder={this.props.placeholder} onChange={this.onChangeForText} />
      )
    }
    if (this.props.type === "select") {
      return (
        <Form.Control as="select" defaultValue={this.props.value} onChange={this.onChange} custom>
          <option key={'None'}>{'None'}</option>
          {
            this.props.options.map(x =>
              <option key={x}>{x}</option>
            )
          }
        </Form.Control>
      )
    }
    if (this.props.type === "tags") {
      return (
        <div>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              this.state.value && this.state.value.length > 0?
                this.state.value.map(tag =>
                  <Badge key={tag} variant="light" className={'hashTag'}
                         style={{backgroundColor: '#92cffb'}}
                         onClick={() => this.removeMeFromArray(tag)}
                  >
                    {'#' + tag + "  X"}
                  </Badge>
                )
                :
                <div>None</div>
            }
          </div>
          <Form.Control
            ref={input => this.inputText = input}
            type="text" defaultValue={""} placeholder={this.props.placeholder} onChange={this.onChangeForArray} />
        </div>

      )
    }
    if (this.props.type === "bullets") {
      return (
        <div>
          <div>
            {
              this.state.value && this.state.value.length > 0?
                this.state.value.map(feature =>
                  <div key={feature} >
                    <Badge variant="light" className={'hashTag'}
                           style={{backgroundColor: '#92cffb'}}
                           onClick={() => this.removeMeFromArray(feature)}
                    >
                      {'• ' + feature + "  X"}
                    </Badge>
                  </div>
                )
                :
                <div>None</div>
            }
          </div>
          <div style={{display: 'flex'}}>
            <Form.Control
              ref={input => this.inputText = input}
              type="text" defaultValue={""}
              placeholder={this.props.placeholder}
            />
            <AddIcon onClick={() => this.addItemToArray()}  />
          </div>

        </div>

      )
    }
  }

  renderFormDisplay() {
    if (this.props.type === "geoLocation") {
      return (
        this.props.value ?
          <span onClick={() => this.ShowGeoModal()}>{this.props.value}</span>
          :
          <span>None</span>
      )
    }
    if (this.props.type === "text") {
      return (
        this.props.value ?
          <span>{this.props.value}</span>
          :
          <span>None</span>
      )
    }
    if (this.props.type === "select") {
      return (
        this.props.value ?
          <span>{this.props.value}</span>
          :
          <span>None</span>
      )
    }
    if (this.props.type === "tags") {
      return (
        this.props.value && this.props.value.length > 0 ?
          <div style={{display:'flex', flexWrap:'wrap'}}>
            {
              this.state.value.map(tag =>
                <Badge key={tag} variant="light" className={'hashTag'}
                       style={{backgroundColor: '#e3e3e3'}}
                >
                  {'#' + tag}
                </Badge>
              )
            }
          </div>
          :
          <span>None</span>
      )
    }
    if (this.props.type === "bullets") {
      return (
        this.props.value && this.props.value.length > 0 ?
          <div>
            {
              this.state.value.map(feature =>
                <div key={feature}>
                  <Badge key={feature} variant="light" className={'hashTag'}
                         style={{backgroundColor: '#e3e3e3'}}
                  >
                    {'• ' + feature}
                  </Badge>
                </div>
              )
            }
          </div>
          :
          <span>None</span>
      )
    }
  }
}

export default FormField;
