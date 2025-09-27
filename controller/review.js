const Expresserror=require("../utilits/Expresserror");
const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");
const {reviewschema}=require("../schema.js");
module.exports.reviewindex=async(req,res)=>{
    let {id}=req.params;
let listing=await Listing.findById(req.params.id);
let newreview= new Review(req.body.review);
newreview.author=req.user;
listing.reviews.push(newreview);
await listing.save();
await newreview.save();
 req.flash("success","New review created");
res.redirect(`/listings/${id}`);
};
module.exports.reviewdestroyroute=async(req,res)=>{
    let {id,reviewid}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});

    await Review.findByIdAndDelete(reviewid);
     req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`);
};