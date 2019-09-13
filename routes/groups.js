const express = require('express');
const router = express.Router();
const User  = require('../models/user');
const Group = require('../models/group');

router.post('/', async (req, res) => {
    let name = req.body.name;

    let user = await User.findById(req.user._id);
    let group = await Group.create({ name });

    group.members.push(user);
    await group.save();

    
    user.memberOf.push(group);
    await user.save();

    res.redirect('/dashboard');
});

module.exports = router