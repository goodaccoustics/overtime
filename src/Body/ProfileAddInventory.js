import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SERVICE_TEMPLATE } from '../Utilities/templates';
import FormField from './FormField';
import {COUNTRIES} from "../Utilities/constants";
import { CATEGORIES } from "../Utilities/templates"
import Button from "react-bootstrap/Button";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }

  componentWillMount() {
    this.setState({
      item: SERVICE_TEMPLATE
    });
  }

  componentWillUnmount() {
    this.setState({
      item: SERVICE_TEMPLATE
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
              <FormField type={"bullets"} id={"serviceCatalog"} label={"Service Catalog"} value={item.serviceCatalog} placeholder={"max 50 char per bullet point"} saveObject={this.updateItem} required/>
              <FormField type={"text"} id={"serviceDescription"} label={"Service Description"} value={item.serviceDescription} placeholder={""} saveObject={this.updateItem}/>
              {/**
               <FormField type={"bullets"} id={"serviceCatalog"} label={"Service Catalog"} value={item.serviceCatalog} placeholder={"max 50 char per bullet point"} saveObject={this.updateItem} required/>
               <FormField type={"text"} id={"title"} label={"Title"} value={item.title} placeholder={""} saveObject={this.updateItem} required/>
               <FormField type={"text"} id={"subTitle"} label={"SubTitle"} value={item.subTitle} placeholder={""} saveObject={this.updateItem}/>
               **/}

            </div>
            :
            ""
        }
        {
          item.serviceCatalog && (item.serviceCatalog.length > 0)?
            <div align="center">
              <Button variant="danger" onClick={() => this.props.saveItemInfo(this.state.item)}>Save</Button>
              {/**
               <FormField type={"tags"} id={"categoryTags"} label={"Category Tags"} value={item.categoryTags} placeholder={"max 24 char per hashtag"} saveObject={this.updateItem} required/>
               <FormField type={"tags"} id={"categoryTags"} label={"Category Tags"} value={item.categoryTags} placeholder={"max 24 char per hashtag"} saveObject={this.updateItem} required/>
               <FormField type={"tags"} id={"popularTags"} label={"Popular Tags"} value={item.popularTags} placeholder={""} saveObject={this.updateItem}/>
               <FormField type={"tags"} id={"styleTags"} label={"Style Tags"} value={item.styleTags} placeholder={""} saveObject={this.updateItem}/>
               <FormField type={"tags"} id={"placeTags"} label={"Place Tags"} value={item.placeTags} placeholder={""} saveObject={this.updateItem}/>
              **/}
            </div>
            :
            ""
        }
      </div>
    );
  }
}

export default Faq;
