const router = require('express-promise-router')();
const passport = require('passport');

const EditorController = require('../../controllers/editor');

const passportAuth = passport.authenticate('jwt', { session: false });

// @route GET api/editor/:id
// @desc Get one note by id
// @access Private
router.route('/:id').get(passportAuth, EditorController.getNote);

// @route PUT api/editor/:id
// @desc Edit a note
// @access Private
router.route('/:id').put(passportAuth, EditorController.editNote);

module.exports = router;
