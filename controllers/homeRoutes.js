const router = require('express').Router();
const { Post, User, Category } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ 
            include: [
                { 
                    model: User,
                    attributes: ["username", "avatar_url"]  
                },
                {
                    model: Category,
                    attributes: ["name"]
                }
            ]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
            avatar_url: req.session.avatar_url
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
