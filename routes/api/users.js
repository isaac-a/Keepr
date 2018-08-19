const router = require('express-promise-router')();
const passport = require('passport');

const UsersController = require('../../controllers/users');
const validateSignUp = require('../../validation/signup');
const validateSignIn = require('../../validation/signin');

const passportAuth = passport.authenticate('jwt', { session: false });

// @route POST api/users/signup
// @desc Create new user
// @access Public
router.route('/signup').post(validateSignUp(), UsersController.signUp);

// @route POST api/users/signin
// @desc Sign in (returning jwt token)
// @access Public
router.route('/signin').post(validateSignIn(), UsersController.signIn);

// @route GET api/users
// @desc Get users ids
// @access Public
router.route('/').get(UsersController.getUsers);

// @route DELETE api/users
// @desc Delete user
// @access Private
router.route('/').delete(passportAuth, UsersController.deleteUser);

module.exports = router;
