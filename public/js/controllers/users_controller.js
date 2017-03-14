var Users = require("../../../models/users") //make this relative to main later

var user = {
  read: function(req, res, next){
    res.json({type: "Read", id: req.params.id})
  },
  create: function(req, res, next){
    res.send(req.body);
  },
  getAll: function(req, res, next){
    Users.find(function(err, data){
      if(err){
        console.log(err);
      } else {
        res.json(data);
      }
    })
  }

}

// module.exports = user;