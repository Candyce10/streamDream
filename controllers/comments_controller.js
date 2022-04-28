const express = require('express');
const router = express.Router();
const db = require('../models')

// Index
router.get('/', async (req, res, next) => {
    try {
        const allComments = await db.Comment.find({})
        res.send(allComments)

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
})


// New
router.get('/new', async (req, res, next) => {
    try {
        const allStreamDream = await db.StreamDream.find({})
        const context = { streamDreams: allStreamDream}
        res.render('comments/new.ejs', context)

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
})


// Create
router.post('/', async (req, res, next) => {
    try {
        const newCommentData = req.body
        const newComment = await db.Comment.create(newCommentData)
        res.redirect('/comments')

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
})


// Show
router.get('/:commentId', async (req, res, next) => {
    try {
        const foundComment = await db.Comment.findById(req.params.commentId).populate('streamDream')
        res.render('comments/show.ejs', { comment: foundComment})

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router