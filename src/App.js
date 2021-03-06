import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import FavFruit from './components/FavFruit';
import Login from './components/Login';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Login/> 
            { isAuthenticated && 
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/favFruit">
                <FavFruit/>
              </Route>
            </Switch>
             } 
  
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
