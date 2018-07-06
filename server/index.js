require('dotenv').congif();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const port = 3003;

const controller = require('./controller');

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.get('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser());

app.listen(port, () => {
  console.log(`Listening on Port:${port}`);
});
