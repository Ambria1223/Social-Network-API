const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionRoutes = require ('./reactionRoutes');
const friendsRoutes = require ('./friendsRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('reaction',reactionRoutes);
router.user('/friends',friendsRoutes);

module.exports = router;