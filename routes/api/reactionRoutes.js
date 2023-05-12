const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../controllers/reactionController');

// POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', createReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete(
  '/:thoughtId/reactions/:reactionId',
  deleteReaction
);

module.exports = router;
