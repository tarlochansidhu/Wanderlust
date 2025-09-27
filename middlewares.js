let Listing=require("./models/listing");
const {reviewschema}=require("./schema.js");
const Expresserror=require("./utilits/expresserror");
const {listingschema}=require("./schema.js");
module.exports.isLogedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        console.log(req.user);
        console.log(req.originalUrl);
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in");
       return res.redirect("/login");
    }
    next();
};
module.exports.saveredirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}
module.exports.isOwner= async(req,res,next)=>{
   let {id}=req.params;
     let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentuser._id)){
        req.flash("error","you have no permisson to update");
        return  res.redirect(`/listings/${id}`);
     }
     next();
}
module.exports.validatelisting = (req,res,next)=>{
    console.log(req.body);
    let {error}=listingschema.validate(req.body);
     if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new Expresserror(404,errmsg);
     }
     else{
        next();
     }
}
module.exports.validatereviews= (req,res,next)=>{
    let {error}=reviewschema.validate(req.body);
     if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new Expresserror(404,error);
     }
     else{
        next();
     }
}