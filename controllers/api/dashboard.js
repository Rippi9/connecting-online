const router = require('express').Router();


// Dashboard Route
router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});

module.exports = router;