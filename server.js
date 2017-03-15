
var express  = require('express');
var app      = express();                 // create our app w/ express
var mongoose = require('mongoose');           // mongoose for mongodb
var port     = process.env.PORT || 8080;        // set the port
var database = require('./config/database');      // load the database config

var morgan = require('morgan');     // log requests to the console (express4)
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)


// configuration ===============================================================
mongoose.connect(database.url);
var db = mongoose.connection

db.once('open', function(){
  console.log('Yay DB is now connected');
}).on('error', function(){
  console.log('db connection interupted');
});


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());


//Routes================================================
var User = require('./app/models/user');
app.get("/users", function(req, res){
  User.find({}, function(err, result){
    if (err) {
      console.log('Error fetching records', err);
    }
    res.status(200).send(result);
    console.log("Completed user get request")
  });
});

app.post("/users", function(req, res){
  console.log("Inside Post FUNCTION: @@@@@@@@@@@");
  // var newUser = new User({
  //   user_id: 1,
  //   user_name: "RyanTest1"
  // });

  console.log("req.body in /users");

  var userInfo = req.body;
  var newUser = new User(userInfo);

  newUser.save(function(err, result){
  if (err) {
    console.log('Error fetching records', err);
  }
    res.status(200).send(result);
    console.log("user saved successfully")
  });
});



var Picture = require('./app/models/picture');
app.get("/pictures", function(req, res){

  Picture.find({user_id: 1}, function(err, result){
    if (err) {
      console.log('Error fetching records', err);
    }
    res.status(200).send(result);
    console.log("Completed picture get request")
  });
});

app.post("/pictures", function(req, res){
  console.log("Inside Post FUNCTION: @@@@@@@@@@@");
  console.log("pictures request body", req.body);

  // var newPicture = new Picture({
  //   picture_id: 1,
  //   user_id: 1,
  //   picture_name: "Zero",
  //   pixels: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
  // });

  var pictureInfo = req.body;
  var newPicture = new Picture(pictureInfo)

  newPicture.save(function(err, result){
  if (err) {
    console.log('Error fetching records', err);
  }
    res.status(200).send(result);
    console.log("picture saved successfully")
  });
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);