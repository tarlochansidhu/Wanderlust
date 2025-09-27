const User=require("../models/user.js");

module.exports.usersignupform=(req,res)=>{
    res.render("./user/signup.ejs");
};
module.exports.usersignuproute=async(req,res)=>{
    try{
        let {username,email,password}=req.body.user;
    let newuser=new User({username,email});
    let registereduser=await User.register(newuser,password);
    req.login(registereduser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    });
    
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
   
};
module.exports.loginform=(req,res)=>{
    res.render("./user/login.ejs");
};
module.exports.userloginroute=async(req,res)=>{
       
        req.flash("success","welacome back to wanderlust");
        let redirect=res.locals.redirectUrl ||"/listings"
        console.log(redirect);

        console.log("logined succesfully");
   res.redirect(redirect);
};
module.exports.userlogoutroute=async(req,res)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You have been logged out. See you soon!");
        res.redirect("/listings");
    })
}