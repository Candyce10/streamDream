const express = require('express')

const router = express.Router()

const db = require('../models')


// Index
router.get('/', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting Index!`)
})


// New
router.get('/new', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting New!`)
})


// Create
router.post('/', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting Create!`)
})


// Show
router.get('/:streamDreamId', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting Id!`)
})


// Update
router.put('/:streamDreamId', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting Update!`)
})


// Edit
router.get('/:streamDreamId/edit', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting edit!`)
})


// Destroy - Delete
router.delete('/', async (req, res, next) => {
    res.send(`Welcome to StreamDream Hitting delete!`)
})



module.exports = router