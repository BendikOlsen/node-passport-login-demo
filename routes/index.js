const express = require('express');
const router = express.Router();
const  { ensureAuthenticated } = require('../config/auth');
const Group = require('../models/group');
const User = require('../models/user');

// Welcome page
router.get('/', (req, res) => res.render('Welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    let user = await User.findById(req.user._id).populate('memberOf')
    console.log(user)
    res.render('dashboard', { user });    
});

module.exports = router;