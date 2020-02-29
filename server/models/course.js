const mongoose = require('mongoose');

const TextbookSchema = mongoose.Schema({
    author: String,
    title: String
});

const CourseSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    textbooks: [TextbookSchema]
});

module.exports = mongoose.model('Course', CourseSchema);