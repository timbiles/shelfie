require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const port = 3003;

const {getAll, create, del, update} = require('./controller');

const app = express();
app.use(bodyParser());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.get('/api/product', getAll);
app.post('/api/product', create);
app.delete('/api/product/:id', del);
app.put('/api/product-edit/:id', update);



app.listen(port, () => {
  console.log(`Listening on Port:${port}`);
});

