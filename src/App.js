import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  Redirect, Link } from 'react-router-dom';
import { history } from "./History";
import Navigation from "./Header/Navigation";
import About from "./Body/About";
import Electronics from "./Body/Electronics";
import Furniture from "./Body/Furniture";
import Faq from "./Body/Faq";
import ShoppingCart from "./Body/ShoppingCart";
import Footer from "./Footer/Footer";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: []
    }
  }

  addToCart = (item) => {
    console.log("addToCart", item);
    if (this.state.shoppingCart.filter(current => current.category === item.category && current.key === item.key).length === 0) {
      this.setState({
        shoppingCart: this.state.shoppingCart.concat(item)
      })
    }
  }

  removeFromCart = (item) => {

  }

  setCart = (cart) => {
    this.setState({
      shoppingCart: cart
    })
  }

  componentDidMount = () =>  {
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation shoppingCart={this.state.shoppingCart} setCart={this.setCart}/>
          <br /><br /><br />
          <Route
            exact
            path={['/', '/About/']}
            render={(props) => <About {...props} addToCart={this.addToCart} />}
          />
          <Route
            exact
            path={'/Electronics/'}
            render={(props) => <Electronics {...props} addToCart={this.addToCart} />}
          />
          <Route
            exact
            path={'/Furniture/'}
            render={(props) => <Furniture {...props} addToCart={this.addToCart}/>}
          />
          <Route
            exact
            path={'/Faq/'}
            render={(props) => <Faq {...props} />}
          />
          <Route
            exact
            path={'/ShoppingCart/'}
            render={(props) => <ShoppingCart {...props} addToCart={this.addToCart} />}
          />
        </div>
        <br /><br /><br />
        <Footer/>
      </Router>
    );
  }
}

export default App;
