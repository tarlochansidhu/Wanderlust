const { required } = require("joi");
const mongoose=require("mongoose");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const passportLocalMongoose=require("passport-local-mongoose");
const userscheama=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
});

userscheama.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userscheama);