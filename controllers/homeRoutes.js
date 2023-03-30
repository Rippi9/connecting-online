const router = require('express').Router();
const {Profile, Clan, User, UserClan} = require('../models');
const withAuth = require('../utils/auth');


// landing option page ----->
router.get('/', async (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('landingPage');
});

// Route to login page ----->
router.get('/login', async (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});



// Route to signup page ----->
router.get('/signUp', async (req, res) => {
  res.render('signUp');
});


// Dashboard route after login

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // ADD USER DATA TO DASHBOARD PAGE============================
    


    res.render('dashboard',{
    logged_in: req.session.logged_in});
  } catch {
    res.status(500).json({ message: "There has been an internal error within dashboard route" });
  }
});






module.exports = router