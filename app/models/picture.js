
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  picture_id: Number, //primary key here ==> connects to Picture.user_id
  user_id: String,
  picture_name: String,
  pixels: String
});

var Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;