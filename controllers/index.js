const router = require('express').Router();
const landingRoutes = require('./landpageRoute');
const dashboard = require('./api/dashboard');
// Landing page route
router.use('/', landingRoutes);
// Dashboard page route
router.use('/api', dashboard);


module.exports = router;