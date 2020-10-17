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
            path='/About/'
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
          {/**
           <Route
            exact
            path='/'
            render={(props) => <About {...props} userObj={this.state.userObj} />}
          />
          <Route
            path='/about'
            render={(props) => <About {...props} userObj={this.state.userObj} />}
          />
          <Route
            path='/requests'
            render={(props) => <Requests {...props} userObj={this.state.userObj} />}
          />
          <Route
            path='/dashboard'
            render={(props) => {
              if (this.state.isSignedIn) {
                return <Dashboard {...props} userObj={this.state.userObj} />;
              } else {
                return <Redirect to="/signin" />
              }
            }
            }
          />
          <Route
            path='/profile'
            render={(props) => <Profile {...props} userObj={this.state.userObj} setUserObj={this.setUserObj} />}
          />
          <Route
            path='/signin'
            render={(props) => <SignIn {...props} userObj={this.state.userObj} setSignedInStatus={this.setSignedInStatus} setUserObj={this.setUserObj} isSignOut={false}/>}
          />
          <Route
            path='/signout'
            render={(props) => <SignIn {...props} userObj={this.state.userObj} setSignedInStatus={this.setSignedInStatus} setUserObj={this.setUserObj} isSignOut={true}/>}
          />
          <Route
            path='/createshoppinglist'
            render={(props) => {
              if (this.state.userObj) {
                return <CreateShoppingList {...props} userObj={this.state.userObj} />;
              } else {
                return <Redirect to="/signin" />
              }
            }
            }

          />
          <Route
            path='/comparebidders'
            render={(props) => {
              if (this.state.userObj) {
                return <CompareBidders {...props} userObj={this.state.userObj} />;
              } else {
                return <Redirect to="/signin" />
              }
            }
            }

          />
           **/}
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
