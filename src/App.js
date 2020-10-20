import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  Redirect } from 'react-router-dom';
import { history } from "./History";
import Navigation from "./Header/Navigation";
import About from "./Body/About";
import Electronics from "./Body/Electronics";
import Furniture from "./Body/Furniture";
import Faq from "./Body/Faq";
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
    if (this.state.shoppingCart.filter(current => current.category === item.category && current.title === item.title).length === 0) {
      this.setState({
        shoppingCart: this.state.shoppingCart.concat(item)
      })
    }
  }

  removeFromCart = (item) => {

  }

  componentDidMount = () =>  {
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation />
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
            render={(props) => <Furniture {...props} addToCart={this.addToCart} />}
          />
          <Route
            exact
            path={'/Faq/'}
            render={(props) => <Faq {...props} />}
          />
        </div>
        <br /><br /><br />
        <Footer/>
      </Router>
    );
  }
}

export default App;
