import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
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

  toggleToEditMode = () => {

    if (this.state.isEditMode) {
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
            {this.props.label}
          </Form.Label>
          <Col sm={8} style={{display: 'flex', justifyContent: 'space-between'}} >
            {
              !this.state.isEditMode ?
                this.props.value ?
                  <span>{this.props.value}</span>
                  :
                  <span>None</span>
                :
                this.renderFormControl()
            }
            <div onClick={() => this.toggleToEditMode()} style={{padding: '5px'}}>
            {
              !this.state.isEditMode ?
                <EditIcon fontSize={"small"} />
                :
                <SaveIcon fontSize={"small"} />
            }
            </div>
          </Col>
        </Form.Group>
      </Form>
    );
  }

  renderFormControl() {
    if (this.props.type === "text") {
      return (
        <Form.Control type="text" placeholder={this.props.placeholder} onChange={this.onChange}/>
      )
    }
    if (this.props.type === "select") {
      return (
        <Form.Control as="select"  onChange={this.onChange} custom>
          {
            this.props.options.map(x =>
              <option key={x}>{x}</option>
            )
          }
        </Form.Control>
      )
    }
  }
}

export default Faq;
