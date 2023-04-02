const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clanRoutes = require('./clanRoutes');


router.use('/users', userRoutes);
router.use('/clans', clanRoutes);


module.exports = router;