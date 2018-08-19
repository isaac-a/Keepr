import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Footer from './Footer';
import { signInUser } from '../actions/authActions';
import InputField from './InputField';
import { Title, SubmitBtn } from '../styles/Form';
import { GoBack } from '../styles/Navigation';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/notes');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signInUser(userData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Navigation signin />
        <GoBack to="/">
          <MaterialIcon icon="arrow_back" />
        </GoBack>
        <div className="container center-align">
          <Title>Sign In</Title>
          <form noValidate onSubmit={this.onSubmit}>
            <InputField
              name="Email"
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
            <InputField
              name="Password"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <div className="row">
              <SubmitBtn>Sign In</SubmitBtn>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

SignIn.propTypes = {
  signInUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signInUser }
)(SignIn);
