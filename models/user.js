var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:{type:String,index:{unique:true}},
  password:String,
  avatar:{
    type:String,
    default:'/images/default-avatar.jpg'
  },
  title:{
    type:String,
    default:'Nameless'
  },
  description:{
    type:String,
    default:'Nothing here.'
  }
});

module.exports = mongoose.model('User', UserSchema);
