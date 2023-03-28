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

// check password and email, then redirects to the login page.
router.post('/login', async (req, res,) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again!' });
        
        return;
      }
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again!' });
        
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.render('dashboard');
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Route to signup page ----->
router.get('/signUp', async (req, res) => {
    res.render('/signUp');
});

module.exports = router;