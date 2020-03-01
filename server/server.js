const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

// Import routes
const courseRoutes = require('./routes/course');

app.use(cors());
app.use(bodyParser.json());
app.use('/course', courseRoutes)

// DB connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {console.log('Connected to MongoDB')});

app.listen(8080);