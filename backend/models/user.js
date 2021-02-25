const mongoose = require('mongoose');


var photoSchema = mongoose.Schema({
    name: String,
    type: String,
    url: String,
   
  });


var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String,
    userId: [{type: mongoose.Schema.Types.ObjectId, ref: 'articles'}],
    photo: [photoSchema]
  
  });
  
var userModel = mongoose.model('users', userSchema);

module.exports = userModel