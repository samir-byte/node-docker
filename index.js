const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));



app.get('/', (req, res) => {
  res.send('<h2>Hey there</h2>');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})