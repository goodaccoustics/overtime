import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import { history } from "./History";
import Navigation from "./Header/Navigation";
import About from "./Body/About";
import CategoryPage from "./Body/CategoryPage";
import Faq from "./Body/Faq";
import ShoppingCart from "./Body/ShoppingCart";
import Footer from "./Footer/Footer";
import './App.css';
import { FIREBASE_PROVIDER, FIREBASE_AUTH } from './Utilities/constants';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
      user: null
    }
  }

  login = () => {
    FIREBASE_AUTH().signInWithPopup(FIREBASE_PROVIDER)
      .then(({ user }) => {
        this.setState(
          {
            user: user
          })
      })
  };

  logout = () => {
    FIREBASE_AUTH().signOut().then(() => {
      this.setState(
        {
          user: null
        })
    })
  };

  addToCart = (item) => {
    console.log("addToCart", item);
    if (this.state.shoppingCart.filter(current => current.category === item.category && current.key === item.key).length === 0) {
      this.setState({
        shoppingCart: this.state.shoppingCart.concat(item)
      })
    }
  }

  itemInCart = (item) => {
    return this.state.shoppingCart.filter(current => current.category === item.category && current.key === item.key).length !== 0;
  }

  removeFromCart = (item) => {
    this.setState({
      shoppingCart: this.state.shoppingCart.filter(current => !(current.category === item.category && current.key === item.key))
    })
  }

  componentDidMount = () =>  {
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation login={this.login} user={this.state.user} shoppingCart={this.state.shoppingCart}/>
          <br /><br /><br />
          <Route
            exact
            path={['/', '/About/']}
            render={(props) => <About {...props} addToCart={this.addToCart} removeFromCart={this.removeFromCart} itemInCart={this.itemInCart} />}
          />
          <Route
            exact
            path={'/Fashion/'}
            render={(props) => <CategoryPage {...props} categoryType={'Fashion'} addToCart={this.addToCart} removeFromCart={this.removeFromCart} itemInCart={this.itemInCart} />}
          />
          <Route
            exact
            path={'/Electronics/'}
            render={(props) => <CategoryPage {...props} categoryType={'Electronics'} addToCart={this.addToCart} removeFromCart={this.removeFromCart} itemInCart={this.itemInCart} />}
          />
          <Route
            exact
            path={'/Furniture/'}
            render={(props) => <CategoryPage {...props} categoryType={'Furniture'} addToCart={this.addToCart} removeFromCart={this.removeFromCart} itemInCart={this.itemInCart} />}
          />
          <Route
            exact
            path={'/Faq/'}
            render={(props) => <Faq {...props} />}
          />
          <Route
            exact
            path={'/ShoppingCart/'}
            render={(props) => <ShoppingCart {...props} addToCart={this.addToCart} removeFromCart={this.removeFromCart} itemInCart={this.itemInCart}  />}
          />
        </div>
        <br /><br /><br />
        <Footer/>
      </Router>
    );
  }
}

export default App;
