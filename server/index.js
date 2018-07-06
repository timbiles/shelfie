require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const port = 3003;

const controller = require('./controller');

const app = express();
app.use(bodyParser());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    //   console.log(db)
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.get('/api/inventory', controller.getAll);
app.post('/api/product', controller.create);

app.listen(port, () => {
  console.log(`Listening on Port:${port}`);
});
