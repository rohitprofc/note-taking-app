const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.get('/', (req, res) => {
    res.send('Welcome to the Note-Taking App');
});

const noteRoutes = require('./routes/note');
app.use('/api', noteRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
