const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Lure = require('./model/lure');

const app = express();
const mongodb = process.env.MONGODB_URI;

mongoose.connect(mongodb);
var db = mongoose.connection;


app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/test', (req, res) => {
  res.json('asdf');
});

app.get('/api/lures', (req, res) => {
  Lure.find(function(err, lures) {
      if(err) {
          res.send(err);
      }
      res.json(lures);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
