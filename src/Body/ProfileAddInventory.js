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

  updateItem = (key, value) => {
    let editedItem = this.state.item;
    editedItem[key] = value;

    this.setState({
      item: editedItem
    });
  }

  render() {

    let {
      item
    } = this.state;

    return (
      <div style={{marginTop:'10px'}}>
        <FormField type={"select"} options={CATEGORIES.map(x => x)} id={"category"} label={"Category"} value={item.category} placeholder={""} saveObject={this.updateItem}/>
        {
          item.category?
            <div>
              <FormField type={"text"} id={"title"} label={"Title"} value={item.title} placeholder={""} saveObject={this.updateItem}/>
              <FormField type={"text"} id={"subTitle"} label={"SubTitle"} value={item.subTitle} placeholder={""} saveObject={this.updateItem}/>
            </div>
            :
            ""
        }
      </div>
    );
  }
}

export default Faq;
