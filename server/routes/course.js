const express = require('express');
const Course = require('../models/course');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    return res.send('Hello world');
});

router.post('/', (req, res) => {
    const course = new Course({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        textbooks: req.body.textbooks
    });

    course.save().then((data) => {
        res.json(data);
    }).
    catch((err) => {
        res.json({mesage: err})
    });
});

router.put('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    return res.send('Hello world');
});

module.exports = router;