import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_TEMPLATE } from '../Utilities/templates';
import FormField from './FormField';

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }

  componentDidMount() {
    this.setState({
      item: ITEM_TEMPLATE
    });
  }

  render() {
    return (
      <div>
        <FormField />
      </div>
    );
  }
}

export default Faq;
