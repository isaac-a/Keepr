const Note = require('../models/Note');

module.exports = {
  getNote: async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.json({ notes: 'There is no note with this id' });
    }
    return res.status(200).json(note);
  },
  editNote: async (req, res) => {
    const { title, text } = req.body;

    const editedNote = await Note.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { title, text, date: new Date() } },
      { new: true }
    );
    console.log(editedNote);

    if (!editedNote) {
      return res.json({ notes: 'There is no note with this id' });
    }
    return res.status(200).json(editedNote);
  }
};
