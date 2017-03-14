  var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var userSchema = new Schema{
    user_id: Number, //primary key here ==> connects to Picture.user_id
    user_name: String,
  }

  var User = mongoose.model("User", userSchema);
  module.exports = User;