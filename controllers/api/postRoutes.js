const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/delete', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({where: {id: req.body.id, user_id: req.session.user_id}});
        if (!postData) {
            res.status(400).json({message: "There was no post found with this id."});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/update', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {where: {id: req.body.id, user_id: req.session.user_id}});
        if (!postData) {
            res.status(404).json({message: "There was no post found with this id."});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/like', withAuth, async (req, res) => {
    try {
        const likeData = await Post.update(req.body, {
            where: {id: req.body.id, user_id: req.body.user_id}
        });

        if(!likeData) {
            res.status(400).json({message: "ERROR in adding like to post"});
            return;
        }
        res.status(200).json(likeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/dislike', withAuth, async (req, res) => {
    try {
        const dislikeData = await Post.update(req.body, {
            where: {id: req.body.id, user_id: req.body.user_id}
        });

        if(!dislikeData) {
            res.status(400).json({message: "ERROR in adding dislike to post"});
            return;
        }
        res.status(200).json(dislikeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;