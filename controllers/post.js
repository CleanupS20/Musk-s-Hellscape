const router = require('express').Router();
const { User, Post, Category, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id,{
            include: [{model: User}]
        });
        if (!postData) {
            res.status(400).json({ message: "There was no post found with this id!"});
            return;
        }
        
        const post = postData.get({ plain: true });

        const commentData = await Comment.findAll({where: {post_id: req.params.id}, include: [{model: User}]});
        const comments = commentData.map((comment) => comment.get({plain: true}));

        res.render('post', {post, comments, post_id: req.params.id, avatar_url: req.session.avatar_url, logged_in: req.session.logged_in, user_id: req.session.user_id});    
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
