const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const { Story, User, Topic } = require("../db/models");


router.get('/', asyncHandler(async (req, res) => {
    res.render('home')
}))

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.url.split("/")[1];
    const user = await User.findByPk(userId);
    const story = await Story.findAll({
        where: {
            userId: userId
        }
    });
    const topic = await Topic.findAll();

    console.log(user, story, topic)
    res.render('user-profile-page', { story, user, topic })
  }));

module.exports = router;
