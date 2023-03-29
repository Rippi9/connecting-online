const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
// Landing page route
router.use('/', homeRoutes);
// Dashboard page route
router.use('/api', apiRoutes);


module.exports = router;