const router = require('express').Router();
const {Profile, Clan, User, UserClan} = require('../models');
const withAuth = require('../utils/auth');


// landing option page ----->
router.get('/', async (req, res) => {
  res.render('landingPage');
});

// Route to login page ----->
router.get('/login', async (req, res) => {
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
    
    // const userData = await User.findByPk(req.session.id, {
    //   attributes: { exclude: ["password"] },
    //   include: [{ model: Profile, Clan, UserClan }],
    // });

    // const user = userData.get({ plain: true });
    // console.log(user);

    res.render('dashboard',
    console.log(req.session.id));
  } catch {
    res.status(500).json({ message: "There has been an internal error within dashboard route" });
  }
});




module.exports = router