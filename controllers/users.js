const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');
const User = require('../models/User');

module.exports = {
  signUp: async (req, res) => {
    // Validate user credentials
    const { errors, isValid } = req.validation;

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { name, email, password } = req.body;

    // Check if email already exists
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(403).json({ email: 'Email already exists' });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    // Save user
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  },
  signIn: async (req, res) => {
    // Validate req.body
    const { errors, isValid } = req.validation;

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Create jwt payload
      const payload = {
        id: user.id,
        name: user.name
      };

      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 10800 },
        (err, token) => {
          res.json({ token: `Bearer ${token}` });
        }
      );
    } else {
      errors.password = 'Password incorrect';
      return res.status(400).json(errors);
    }
  },
  getUsers: async (req, res) => {
    const users = await User.find({});

    if (!users) {
      return res.status(400).json({ users: 'There are no users' });
    }

    const usersIds = users.map(user => {
      return { id: user.id, name: user.name };
    });

    return res.json(usersIds);
  },
  deleteUser: async (req, res) => {
    const deletedUser = await User.findByIdAndRemove(req.user.id);
    return res.json(deletedUser);
  }
};
