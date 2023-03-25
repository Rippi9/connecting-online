const router = require('express').Router();


// landing option page ----->
router.get('/', async (req, res) => {
    res.render('landingPage');
});

// Route to login page ----->
router.get('/login', async (req, res) => {
    res.render('login');
});

// Route to signup page ----->
router.get('/signup', async (req, res) => {
    res.render('/signup');
});

module.exports = router;