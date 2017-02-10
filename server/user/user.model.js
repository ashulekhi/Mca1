var mongoose = require('mongoose');

var Schema = mongoose.Schema ; 


var userSchema = new Schema({
	email : String .
	password: String,
	username:String,
})

var userModel = mongoose.model('user' , userSchema);


module.exports = userModel ; 