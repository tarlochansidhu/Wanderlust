const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utilits/wrapasync.js");
const Expresserror=require("../utilits/expresserror");
const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");
const {reviewschema}=require("../schema.js");
const { isLogedIn, validatereviews } = require("../middlewares.js");
const reviewcontroller=require("../controller/review.js");


router.post("/",isLogedIn,validatereviews,wrapAsync(reviewcontroller.reviewindex));
router.delete("/:reviewid",wrapAsync(reviewcontroller.reviewdestroyroute));
module.exports=router;