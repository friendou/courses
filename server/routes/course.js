const express = require('express');
const Course = require('../models/course');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    return res.send('Hello world');
});

router.post('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    return res.send('Hello world');
});

module.exports = router;