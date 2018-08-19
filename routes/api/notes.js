const router = require('express-promise-router')();
const passport = require('passport');

const NotesController = require('../../controllers/notes');

const passportAuth = passport.authenticate('jwt', { session: false });

// @route GET api/notes
// @desc Get all user's notes
// @access Private
router.route('/').get(passportAuth, NotesController.getNotes);

// @route POST api/notes
// @desc Post a note
// @access Private
router.route('/').post(passportAuth, NotesController.postNote);

// @route DELETE api/notes/:id
// @desc Delete a note
// @access Private
router.route('/:id').delete(passportAuth, NotesController.deleteNote);

module.exports = router;
