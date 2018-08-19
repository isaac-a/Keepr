const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String
  },
  text: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Note = mongoose.model('note', NoteSchema);
