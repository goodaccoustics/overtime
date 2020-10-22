import React, {Component} from 'react';
import Badge from 'react-bootstrap/Badge'
import { InventoryItems } from '../Inventory/Inventory'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDisplay from "./CardsDisplay";

class Electronics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagTabCategories: ["Category","Popular","Style","Place"],
      tagTab: "Category",
      tagsToDisplay: [],
      tagSelected: ""
    }
  }

  componentWillMount() {
    //console.log(this.props.location);

    this.setState({
      tagsToDisplay: this.getTags(this.state.tagTab)
    });
    console.log("tagsToDisplay", this.state.tagsToDisplay);

  }

  onTagTabClick = (category) => {
    //console.log("onTagTabClick", category);
    let tags = this.getTags(category);
    //console.log("tagsFound", tags);
    this.setState({
      tagTab: category,
      tagsToDisplay: tags
    });
  }

  onHashTagClick = (hashTag) => {
    //console.log("hashTag", hashTag);
    this.setState({
      tagSelected: hashTag
    });
  }

  getTags = (categoryType) => {
    const items = InventoryItems("Electronics");
    //console.log("item", items);
    let searchBy = '';
    switch (categoryType) {
      case 'Category':
        searchBy = 'categoryTags';
        break;
      case 'Popular':
        searchBy = 'popularTags';
        break;
      case 'Style':
        searchBy = 'styleTags';
        break;
      case 'Place':
        searchBy = 'placeTags';
        break;
    }
    let tags = [];
    items.map(item => {
      item[searchBy].map(tag => {
        if (!tags.includes(tag)) {
          tags = tags.concat(tag);
        }
      })
    });
    return tags;
  }


  render() {
    return (
      this.props.location.itemKey ?
        // Show Item Page
        <p>In Electronics with key: {this.props.location.itemKey}</p>
        :
        // Show Main Page
        <div>
          <div style={{display:'flex', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px'}}>
            {
              this.state.tagTabCategories.map(category =>
              <div
                key={category}
                className={category === this.state.tagTab? "tag-tab-selected":"tag-tab-unselected"}
                onClick={() => this.onTagTabClick(category)}
              >
                <span>{category}</span>
              </div>
            )}
          </div>
          <div style={{display:'flex', paddingLeft:'20px', paddingRight:'20px', paddingBottom: '25px'}}>
            {
              this.state.tagsToDisplay.map(tag =>
                <Badge key={tag} variant="light" className={'hashTag'} onClick={() => this.onHashTagClick(tag)}>
                  {'#' + tag}
                </Badge>
              )
            }
          </div>
          <CardsDisplay category={"Electronics"} tag={this.state.tagSelected} addToCart={this.props.addToCart}  />
        </div>

    );
  }
}

export default Electronics;
