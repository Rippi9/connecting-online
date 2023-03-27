const router = require('express').Router();
const { User } = require('../models');

// landing option page ----->
router.get('/', async (req, res) => {
    res.render('landingPage');
});

// Route to login page ----->
router.get('/login', async (req, res) => {
    res.render('login');
});

// Find user from DB, match email + password, validate, then proceed to dashboard. 
router.post('/login', async (req,res) => {
    try {
        const userData = User.findOne({where: { email: req.body.email} });
        if(!userData) {
            res
            .status(400)
            .json({message: 'Incorrect Email or password, please try again!' });
            return;
        };
        const validPassword = await userData.checkPassword(req.body.password)
        if (!validPassword) {
            res
            .status(400)
            .json({message: 'Incorrect Email or password, please try again!' });
            return;
        };
        // save user session cookie
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({user: userData, message: 'You are now logged in!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

// Route to signup page ----->
router.get('/signup', async (req, res) => {
    res.render('/signup');
});

module.exports = router;