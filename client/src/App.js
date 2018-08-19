import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './store';

import PrivateRoute from './components/PrivateRoute';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Notes from './components/Notes';
import Editor from './components/Editor';
import setAuthToken from './helpers/setAuthToken';
import { setCurrentUser, signOutUser } from './actions/authActions';

// Check for token
if (localStorage.keeprToken) {
  // Set token in header auth
  setAuthToken(localStorage.keeprToken);
  // Decode token and get user
  const decoded = jwt_decode(localStorage.keeprToken);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(signOutUser());
    window.location.href = '/signin';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Switch>
              <PrivateRoute exact path="/notes" component={Notes} />
              <PrivateRoute exact path="/editor/:id" component={Editor} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
