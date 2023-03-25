const router = require('express').Router();
const landingRoutes = require('./landpageRoute');

// Landing page route
router.use('/', landingRoutes);


module.exports = router;