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
      <div style={{marginTop:'1rem'}}>
        <FormField type={"select"} options={CATEGORIES.map(x => x)} id={"category"} label={"Category"} value={item.category} placeholder={""} saveObject={this.updateItem} required />
        {
          item.category?
            <div>
              <FormField type={"text"} id={"title"} label={"Title"} value={item.title} placeholder={""} saveObject={this.updateItem} required/>
              <FormField type={"text"} id={"subTitle"} label={"SubTitle"} value={item.subTitle} placeholder={""} saveObject={this.updateItem}/>
            </div>
            :
            ""
        }
        {
          item.title?
            <div>
              <FormField type={"tags"} id={"categoryTags"} label={"Category Tags"} value={item.categoryTags} placeholder={"max 24 char per hashtag"} saveObject={this.updateItem} required/>
              {/**
              <FormField type={"tags"} id={"popularTags"} label={"Popular Tags"} value={item.popularTags} placeholder={""} saveObject={this.updateItem}/>
              <FormField type={"tags"} id={"styleTags"} label={"Style Tags"} value={item.styleTags} placeholder={""} saveObject={this.updateItem}/>
              <FormField type={"tags"} id={"placeTags"} label={"Place Tags"} value={item.placeTags} placeholder={""} saveObject={this.updateItem}/>
              **/}
            </div>
            :
            ""
        }
        {
          item.categoryTags && item.categoryTags.length > 1?
            <div>
              <FormField type={"bullets"} id={"productFeatures"} label={"Product Features"} value={item.productFeatures} placeholder={"max 50 char per point"} saveObject={this.updateItem} required/>
              <FormField type={"text"} id={"productDescription"} label={"Product Description"} value={item.productDescription} placeholder={""} saveObject={this.updateItem} required/>
            </div>
            :
            ""
        }
      </div>
    );
  }
}

export default Faq;
