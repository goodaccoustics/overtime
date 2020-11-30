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
      isEditMode: false
    }

  }

  componentDidMount() {
  }

  toggleEditMode = () => {
    this.setState ({
      isEditMode: !this.state.isEditMode
    });
  }

  render() {
    return (
      <Form.Group as={Row} controlId={this.props.id}>
        <Form.Label column sm={3} className={'profile-form-label'}>
          {this.props.label}
        </Form.Label>
        <Col sm={8} style={{margin: 'auto'}}>
          {
            !this.state.isEditMode ?
              this.props.value ?
                <span>{this.props.value}</span>
                :
                <span>None</span>
              :
              this.renderFormControl()
          }
        </Col>
        <Col sm={1} style={{margin: 'auto'}}>
          <div onClick={() => this.toggleEditMode()}>
            {
              !this.state.isEditMode ?
                <EditIcon />
                :
                <SaveIcon />
            }
          </div>
        </Col>
      </Form.Group>

    );
  }

  renderFormControl() {
    if (this.props.type === "text") {
      return (
        <Form.Control type="text" placeholder={this.props.placeholder} />
      )
    }
    if (this.props.type === "select") {
      return (
        <Form.Control as="select" custom>
          {
            this.props.options.map(x =>
              <option>{x}</option>
            )
          }
        </Form.Control>
      )
    }
  }
}

export default Faq;
