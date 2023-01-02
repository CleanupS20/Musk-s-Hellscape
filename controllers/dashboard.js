const router = require('express').Router();
const { Post, User, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            avatar_url: req.session.avatar_url,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', withAuth, async (req, res) => {
    res.render('dashboardpost', {avatar_url: req.session.avatar_url, logged_in: req.session.logged_in, user_id: req.session.user_id});
});

router.get('/update/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if(!postData) {
            res.status(404).json({message: "ERROR you have no post with that id"});
            return;
        }
        const post = postData.get({plain: true});
        res.render('dashboardupdate', {post, post_id: req.params.id, avatar_url: req.session.avatar_url, logged_in: req.session.logged_in, user_id: req.session.user_id});
    } catch (error) {
        
    }
});


module.exports = router;
