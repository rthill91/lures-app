const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Lure = require('./model/lure');

const app = express();
const mongodb = process.env.MONGODB_URI;

mongoose.connect(mongodb);
var db = mongoose.connection;

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'build')));

  
  app.get('/api/lures', (req, res) => {
  Lure.find(function(err, lures) {
      if(err) {
          res.send(err);
      }
      res.json(lures);
  });
});

app.post('/api/lure', (req, res) => {
  let lure = req.body;
  let id = lure._id;
  delete lure._id;
  console.log(lure)
  Lure.update({_id: id}, lure, {upsert: true, setDefaultsOnInsert: true}, function(err, lure) {
    if(err) {
      res.send('error');
    }
    res.send('success')
  })
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
