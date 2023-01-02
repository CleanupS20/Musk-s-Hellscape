const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./categories');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const dashboardRoutes = require('./dashboard');
const postRoutes = require('./post');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/categories', categoryRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);

module.exports = router;