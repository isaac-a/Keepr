const Note = require('../models/Note');

module.exports = {
  getNotes: async (req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({
      date: 'desc'
    });
    if (!notes) {
      return res
        .status(400)
        .json({ notes: 'There are no notes to display' });
    }
    return res.status(200).json(notes);
  },
  postNote: async (req, res) => {
    const { title, text } = req.body;
    const newNote = await new Note({
      title,
      text,
      user: req.user.id
    }).save();

    return res.status(200).json(newNote);
  },
  deleteNote: async (req, res) => {
    const removedNote = await Note.findByIdAndRemove(req.params.id);

    if (!removedNote) {
      return res.json({ notes: 'There is no note with this id' });
    }
    const userNotes = await Note.find({ user: req.user.id });
    return res.json(userNotes);
  }
};
