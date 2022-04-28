const express = require('express')

const router = express.Router()

const db = require('../models')


// Index
router.get('/', async (req, res, next) => {
    try {
        const streamDreams = await db.StreamDream.find({});
        const context = { streamDreams }
        return res.render('index.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// New
router.get('/new', async (req, res, next) => {
    res.render('new.ejs')
})


// Show
router.get('/:id/', async (req, res, next) => {
    try {
        const foundStreamDream = await db.StreamDream.findById(req.params.id)
        const context = {
            oneStreamDream: foundStreamDream
        }
        return res.render('show.ejs' , context)
        
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// Create
router.post('/', async (req, res, next) => {
    try {
        // console.log(req.body)
        const createdStreamDream = await db.StreamDream.create(req.body);
        res.redirect('/streamDream')

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// Update
router.put('/:streamDreamId', async (req, res, next) => {
    try {
        const updatedStreamDream = await db.StreamDream.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect('/streamDream')

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// Edit
router.get('/:streamDreamId/edit', async (req, res, next) => {
    try {
        const updateStreamDream = await db.StreamDream.findById(req.params.id);
        const context = {
            streamDream: updateStreamDream
        }
        return res.render('edit.ejs', context)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


// Destroy - Delete
router.delete('/', async (req, res, next) => {
    try {
        const deleteStreamDream = await db.StreamDream.findbyIdAndDelete(req.params.id);
        return res.redirect('/streamDream')

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



module.exports = router