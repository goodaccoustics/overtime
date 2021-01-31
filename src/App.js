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
import { USER_TEMPLATE, SortServicesByKey } from "./Utilities/templates";
import {Items} from "./Inventory/config";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
      user: null,
      userServices: []
    }
  }

  setProfileUser = (user) => {
    let userObj = null;
    let usersRef = FIREBASE_DB.collection('users');

    let userQuery = usersRef.where('email', '==', user.email).get()
      .then(snapshot => {
        if (snapshot.empty) {
          userObj = USER_TEMPLATE;
          userObj.joinedOn = new Date();
        }
        else if (!snapshot.empty) {
          snapshot.forEach(doc => {
            userObj = doc.data();
          });
        }

        userObj.displayName = user.displayName;
        userObj.email = user.email;
        userObj.photoURL = user.photoURL;
        userObj.lastLogin = new Date();

        let setUser = usersRef.doc(user.email).set(userObj);

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

  setUserServices = (user) =>{
    console.log("setUserServicesIsCalled");
    const servicesRef = FIREBASE_DB.collection('services');
    const snapshot = servicesRef.where('userEmail', '==', user.email).get()
      .then(snapshot => {
        if (snapshot.empty) {
          this.setState({
            userServices: []
          });
        }
        else {
          let retrievedUserServices = [];
          snapshot.forEach(doc => {
            retrievedUserServices.push(doc.data())
          });
          this.setState({
            userServices: retrievedUserServices.sort((a, b) => SortServicesByKey(a, b))
          });
        }
      });
  }

  login = () => {
    FIREBASE_AUTH().signInWithPopup(FIREBASE_PROVIDER)
      .then(({ user }) => {
        console.log("user", user)
        this.setProfileUser(user);
        this.setUserServices(user);
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

    let usersRef = FIREBASE_DB.collection('users');
    let setUser = usersRef.doc(editedUserObj.email).set(editedUserObj);
  }

  saveItemInfo = (itemObj) => {
    let editedUserObj = this.state.user;

    if (itemObj.key) {
      // update item
      const servicesRef = FIREBASE_DB.collection('services').doc(itemObj.key);
      const res = servicesRef.update(itemObj);

      let filteredUserServices = this.state.userServices.filter(x => x.key !== itemObj.key);
      filteredUserServices.push(itemObj);
      this.setState({
        userServices: filteredUserServices.sort((a, b) => SortServicesByKey(a, b))
      });

    } else {
      // add item
      let servicesRef = FIREBASE_DB.collection('services').doc();
      itemObj['userEmail'] = editedUserObj.email;
      itemObj['key'] = servicesRef.id;
      const addServiceResult = servicesRef.set(itemObj);
      let newUserServices = this.state.userServices;
      newUserServices.push(itemObj);
      this.setState({
        userServices: newUserServices.sort((a, b) => SortServicesByKey(a, b))
      });
    }
  }

  deleteItem = (itemObj) => {
    let deleteServiceRef = FIREBASE_DB.collection('services').doc(itemObj.key).delete()
    let filteredUserServices = this.state.userServices.filter(x => x.key !== itemObj.key);
    this.setState({
      userServices: filteredUserServices.sort((a, b) => SortServicesByKey(a, b))
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
                return <Profile {...props}
                                user={this.state.user}
                                userServices={this.state.userServices}
                                logout={this.logout}
                                saveUserInfo={this.saveUserInfo}
                                setUserServices={this.setUserServices}
                                saveItemInfo={this.saveItemInfo}
                                deleteItem={this.deleteItem}
                        />;
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
