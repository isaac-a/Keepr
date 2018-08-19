const Validator = require('validator');
const { isEmpty, assignValidValue } = require('./helpers');

module.exports = function validateSignUp() {
  return (req, res, next) => {
    let { name, email, password, password2 } = req.body;
    let errors = {};

    // if isEmpty assign an empty string (Validator requires a string)
    assignValidValue([name, email, password, password2]);

    if (!Validator.isLength(name, { min: 2, max: 30 })) {
      errors.name = 'Name must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(name)) {
      errors.name = 'Name field is required';
    }
    if (!Validator.isEmail(email)) {
      errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(email)) {
      errors.email = 'Email field is required';
    }
    if (!Validator.isLength(password, { min: 6, max: 30 })) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (Validator.isEmpty(password)) {
      errors.password = 'Password field is required';
    }
    if (Validator.isEmpty(password2)) {
      errors.password2 = 'Confirm Password field is required';
    }
    if (!Validator.equals(password, password2)) {
      errors.password2 = 'Passwords do not match';
    }

    req.validation = {
      errors,
      isValid: isEmpty(errors)
    };

    next();
  };
};
