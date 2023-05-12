const router = require('express').Router();
const {
  addFriend,
  removeFriend,
} = require('../controllers/friendController');

// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
