const router = require('express').Router();
const { Clan, User, UserClan } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newClan = await Clan.create({
      ...req.body,
      user_id: req.session.user_id
     },
      {
      include: {
        model: User,
        as: 'creator',
        attributes: ['id','username'],
      },
    });


      req.session.save(() => {
      req.session.user_id = newClan.id;
      req.session.logged_in = true;
      
      res.status(201).json(newClan);
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;