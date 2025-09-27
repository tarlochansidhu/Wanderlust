const express=require("express");
const { models } = require("mongoose");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utilits/wrapasync.js");
const passport = require("passport");
const { saveredirectUrl } = require("../middlewares.js");
const usercontroller=require("../controller/user.js");
//signup
router.route("/signup")
    .get(usercontroller.usersignupform)
    .post( usercontroller.usersignuproute);

router.route("/login")
    .get(usercontroller.loginform)
    .post(saveredirectUrl,
    passport.authenticate('local', { failureRedirect: '/login' ,failureFlash:true})
    ,wrapAsync(usercontroller.userloginroute));
    
    
//logout
router.get("/logout",wrapAsync(usercontroller.userlogoutroute));


module.exports=router;