const router = require('express').Router();
const userDashboard = require('./dashboard');

router.use('/dashboard', userDashboard);