// const { error } = require("console");
require('dotenv').config()
console.log(process.env.SECRET) 
const express=require("express");
const app=express();
const port = 3000;

const mongoose=require("mongoose");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
//routes
const listings=require("./routes/listing.js");
const reviews=require("./routes/review.js");
const user=require("./routes/user.js");
//method override
const methodOverride=require("method-override");
app.use(methodOverride('_method'));
//views
app.set('view engine', 'ejs');
const path=require("path");
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const ejsmate = require('ejs-mate');
app.engine('ejs', ejsmate);
const dburl=process.env.ATLASDB_URL;
// utilities
const Expresserror=require("./utilits/Expresserror");
//database connection
async function main() {
    // mongoose.connect(dburl);
    try {
    await mongoose.connect(dburl, {
      family: 4, // Force IPv4 (optional, helps avoid SRV DNS timeouts)
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

 main();

//session
const store=MongoStore.create({
  mongoUrl:dburl,
  crypto: {
    secret:process.env.SECRET,
  },
  touchAfter:24*3600,
});
store.on("error",()=>{
  console.log("error in session store");
});
const sessionoptions={
   store,
      secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now()+7*24*60*60*60*1000,
    maxAge:7*24*60*60*60*1000,
    httpOnly:true,
  },
};
app.use(session(sessionoptions));
//flash
app.use(flash());
//passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
res.locals.success=req.flash("success");
res.locals.error=req.flash("error");
res.locals.currentuser=req.user;
next();
});

// listing all 
app.use("/listings",listings);
//review all
app.use("/listings/:id/review",reviews);
//user
app.use("/",user);

app.all("{*splat}",(req,res,next)=>{
    next(new Expresserror(400,"page not found"));
}) 

// 
app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"}=err;
    res.render("./listings/error.ejs",{message});
})

app.listen(port,()=>{
    console.log("site started");
});
