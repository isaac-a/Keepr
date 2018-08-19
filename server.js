const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

const dbURI = require('./config/keys').mongoURI;

mongoose
  .connect(
    dbURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.log(err));

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/notes', require('./routes/api/notes'));
app.use('/api/editor', require('./routes/api/editor'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
