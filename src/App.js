import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { history } from "./History";
import Navigation from "./Header/Navigation";
import About from "./Body/About";
import Profile from "./Body/Profile";
import CategoryPage from "./Body/CategoryPage";
import Faq from "./Body/Faq";
import ShoppingCart from "./Body/ShoppingCart";
import Footer from "./Footer/Footer";
import './App.css';
import { FIREBASE_PROVIDER, FIREBASE_AUTH, FIREBASE_DB } from './Utilities/constants';
import { USER_TEMPLATE } from "./Utilities/templates";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
      user: null
    }
  }

  setProfileUser = (user) => {
    let userObj = null;
    let usersRef = FIREBASE_DB.collection('users');

    let userQuery = usersRef.where('email', '==', user.email).get()
      .then(snapshot => {
        if (snapshot.empty) {
          userObj = USER_TEMPLATE;
        }
        else if (!snapshot.empty) {
          snapshot.forEach(doc => {
            userObj = doc.data();
          });
        }

        userObj.displayName = user.displayName;
        userObj.email = user.email;
        userObj.photoURL = user.photoURL;

        this.setState(
          {
            user: userObj
          }
        );
      })
      .catch(err => {
        console.log('Error getting user', err);
      });

  };

  login = () => {
    FIREBASE_AUTH().signInWithPopup(FIREBASE_PROVIDER)
      .then(({ user }) => {
        console.log("user", user)
        this.setProfileUser(user);
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

  saveUserInfo = (key, value) => {
    let editedUserObj = this.state.user;
    editedUserObj[key] = value;
    this.setState({
      user: editedUserObj
    });
  }

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
    FIREBASE_AUTH().onAuthStateChanged(user => {
      if (user) {
        this.setProfileUser(user);
      }
      else {
        this.setState({
          user: null
        })  ;
      };
    });
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
            path={['/', '/Profile/']}
            render={(props) => {
              if (this.state.user) {
                return <Profile {...props} user={this.state.user} logout={this.logout} saveUserInfo={this.saveUserInfo} />;
              } else {
                return <Redirect to="/About/" />;
              }
            }}
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
