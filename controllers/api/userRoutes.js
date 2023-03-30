const router = require('express').Router();

const {Profile, Clan, User, UserClan} = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.status(200).json(userData);
    });
  } catch {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res,) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again!' });
        console.log('wrong email')
        return;
      }
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again!' });
        console.log('wrong password')
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

 


  module.exports = router;