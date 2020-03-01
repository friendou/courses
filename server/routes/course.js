const express = require('express');
const Course = require('../models/course');
const router = express.Router();

// Routes
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses)
    } catch (e) {
        res.json({message: e})
    }
});

router.post('/', async (req, res) => {
    const course = new Course({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        textbooks: req.body.textbooks
    });
    try {
        const createdCourse = await course.save();
        res.json(createdCourse);
    } catch(e) {
        res.json({message: e})
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Course.updateOne(
            { 
                id: req.params.id 
            }, 
            { 
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    textbooks: req.body.textbooks
                }
            }
        );
        res.json(updatedPost);
    } catch(e) {
        res.json({message: e});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Course.remove({ id: req.params.id })
        res.json(removedPost);
    } catch(e) {
        res.json({message: e});
    }
});

module.exports = router;