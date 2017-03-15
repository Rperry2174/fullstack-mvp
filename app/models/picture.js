
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  picture_id: Number, //primary key here ==> connects to Picture.user_id
  user_id: Number,
  picture_name: String,
  pixels: Array
});

var Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;