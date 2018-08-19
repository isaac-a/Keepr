import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Footer from './Footer';
import { signUpUser } from '../actions/authActions';
import InputField from './InputField';
import { Title, SubmitBtn } from '../styles/Form';
import { GoBack } from '../styles/Navigation';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signUpUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Navigation signup />
        <GoBack to="/">
          <MaterialIcon icon="arrow_back" />
        </GoBack>
        <div className="container center-align">
          <Title>Sign Up</Title>
          <form noValidate onSubmit={this.onSubmit}>
            <InputField
              name="Username"
              value={this.state.name}
              id="name"
              type="text"
              onChange={this.onChange}
              error={errors.name}
            />
            <InputField
              name="Email"
              value={this.state.email}
              id="email"
              type="email"
              onChange={this.onChange}
              error={errors.email}
            />
            <InputField
              name="Password"
              value={this.state.password}
              id="password"
              type="password"
              onChange={this.onChange}
              error={errors.password}
            />
            <InputField
              name="Confirm Password"
              value={this.state.password2}
              id="password2"
              type="password"
              onChange={this.onChange}
              error={errors.password2}
            />
            <div className="row">
              <SubmitBtn>Sign Up</SubmitBtn>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

SignUp.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signUpUser }
)(SignUp);
