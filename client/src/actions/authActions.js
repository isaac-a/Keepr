import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../helpers/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const signUpUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(() => history.push('/signin'))
    .catch(err =>
      dispatch({ type: GET_ERRORS, payload: err.response.data })
    );
};

export const signInUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/signin', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('keeprToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push('/notes');
    })
    .catch(err =>
      dispatch({ type: GET_ERRORS, payload: err.response.data })
    );
};

export const signOutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('keeprToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
