import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import '../App.css';
import {COUNTRIES} from "../Utilities/constants";


class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
      value: this.props.value
    }

  }

  componentDidMount() {
  }

  toggleToEditMode = (reset) => {

    if (this.state.isEditMode && !reset) {
      if (this.state.value) {
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


  render() {
    return (
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
                <div onClick={() => this.toggleToEditMode(true)} >
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
    );
  }

  renderFormControl() {
    if (this.props.type === "text") {
      return (
        <Form.Control type="text" defaultValue={this.props.value} placeholder={this.props.placeholder} onChange={this.onChange} />
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
        <Form.Control type="text" defaultValue={this.props.value} placeholder={this.props.placeholder} onChange={this.onChange} />
      )
    }
  }

  renderFormDisplay() {
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
          <div style={{display:'flex', flexWrap:'wrap', justifyContent: '' }}>
            <div class={'tag-tab-unselected'}>{'#' + this.props.value}</div>
          </div>
          :
          <span>None</span>
      )
    }
  }
}

export default Faq;
