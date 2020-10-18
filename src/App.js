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
  }

  componentDidMount = () =>  {
  }


  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation />
          <Route
            exact
            path={['/', '/About/']}
            render={(props) => <About {...props} />}
          />
          <Route
            exact
            path={'/Electronics/'}
            render={(props) => <Electronics {...props} />}
          />
          <Route
            exact
            path={'/Furniture/'}
            render={(props) => <Furniture {...props} />}
          />
          <Route
            exact
            path={'/Faq/'}
            render={(props) => <Faq {...props} />}
          />
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
