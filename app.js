var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
var env = require('dotenv').load();
var port = process.env.PORT || 8080;
var cors = require('cors')


app.use(cors())
app.options('*', cors())

// models
var models = require("./models");

// routes
var places = require('./routes/places');

//Sync Database
models.sequelize.sync().then(function() {
  console.log('connected to database')
}).catch(function(err) {
  console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// register routes
app.use('/places', places);

// index path
app.get('/', function(req, res){
  console.log('app listening on port: '+port);
  res.send('Server is running')
});

app.listen(port, function(){
  console.log('app listening on port: '+port);
});

module.exports = app;
