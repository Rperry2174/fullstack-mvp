
var express  = require('express');
var app      = express();                 // create our app w/ express
var mongoose = require('mongoose');           // mongoose for mongodb
var port     = process.env.PORT || 8080;        // set the port
var database = require('./config/database');      // load the database config

var morgan = require('morgan');     // log requests to the console (express4)
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)


// configuration ===============================================================
mongoose.connect(database.url);
console.log(database)

mongoose.connection.once('open', function(){
  console.log('Yay DB is now connected');
}).on('error', function(){
  console.log('db connection interupted');
});

app.use(express.static(__dirname + '/config'));
app.use(morgan('dev'));
app.use(bodyParser.json());



app.get(__dirname + '/config', function(req, res){
  // User.findOne({}, function(err, result){
  //   if (err) {
  //     console.log('Error fetching records', err);
  //   }
  //   res.status(200).send(result);
  //   console.log("Completed get request")
  // });
  console.log("request", req)
  res.send("success");
});

app.post(__dirname + '/config', function(req, res){
  var newUser = new User({
    user_id: 1,
    user_name: "Ryan"
  });
  users.save({user_id: ''}, function(err, result){
  if (err) {
    console.log('Error fetching records', err);
  }
    res.status(200).send(result);
  });
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);