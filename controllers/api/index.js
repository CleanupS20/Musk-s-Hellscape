const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');


router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);
router.use('/post', postRoutes)

module.exports = router;