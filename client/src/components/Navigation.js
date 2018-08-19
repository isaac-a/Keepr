import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import MobileNavigation from './MobileNavigation';
import { signOutUser } from '../actions/authActions';
import { NavBar, Logo, Image, NavLink } from '../styles/Navigation';

class Navigation extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
      draggable: true
    });
  }

  render() {
    const authLinks = (
      <ul className="right">
        {this.props.editor && (
          <li>
            <NavLink to="/notes">Notes</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/" onClick={this.props.signOutUser}>
            Sign Out
          </NavLink>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="right">
        {this.props.landing && (
          <div>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </div>
        )}
        {this.props.signin && (
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        )}
        {this.props.signup && (
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        )}
      </ul>
    );

    return window.innerWidth >= 992 ? (
      <NavBar>
        <div className="nav-wrapper white">
          <Logo to={this.props.auth.isAuthenticated ? '/notes' : '/'}>
            <Image src={require('../images/logo.png')} alt="Keepr" />
          </Logo>
          {this.props.auth.isAuthenticated ? authLinks : guestLinks}
        </div>
      </NavBar>
    ) : (
      <MobileNavigation
        editor={this.props.editor}
        signOutUser={this.props.signOutUser}
      />
    );
  }
}

Navigation.propTypes = {
  signOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  editor: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signOutUser }
)(Navigation);
