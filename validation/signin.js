const Validator = require('validator');
const { isEmpty, assignValidValue } = require('./helpers');

module.exports = function validateSignIn() {
  return (req, res, next) => {
    let { email, password } = req.body;
    let errors = {};

    // if isEmpty assign an empty string (Validator requires a string)
    assignValidValue([email, password]);

    if (Validator.isEmpty(email)) {
      errors.email = 'Email field is required';
    }
    if (!Validator.isEmail(email)) {
      errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(password)) {
      errors.password = 'Password field is required';
    }

    req.validation = {
      errors,
      isValid: isEmpty(errors)
    };

    next();
  };
};
