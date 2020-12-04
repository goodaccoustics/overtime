import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_TEMPLATE } from '../Utilities/templates';
import FormField from './FormField';
import {COUNTRIES} from "../Utilities/constants";
import { CATEGORIES } from "../Utilities/templates"

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }

  componentWillMount() {
    this.setState({
      item: ITEM_TEMPLATE
    });
  }

  render() {

    let {
      item
    } = this.state;

    let {
      saveItemInfo
    } = this.props;

    return (
      <div>
        <FormField type={"select"} options={CATEGORIES.map(x => x)} id={"category"} label={"Category"} value={item.category} placeholder={""} saveObject={saveItemInfo}/>
      </div>
    );
  }
}

export default Faq;
