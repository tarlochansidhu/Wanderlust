const express=require("express");
const router=express.Router();
const wrapAsync=require("../utilits/wrapasync.js");

const Listing=require("../models/listing.js");

const {isLogedIn, isOwner, validatelisting}=require("../middlewares.js");
const listingcontroller=require("../controller/listing.js");
const multer  = require('multer');
const {storage}=require('../cloudconfig.js');
const upload = multer({ storage});


router.get("/", wrapAsync(listingcontroller.index));
// create 
router.route("/create")
    .get(isLogedIn,listingcontroller.listingcreateform)
    .post(isLogedIn,upload.array("listing[images]",10),validatelisting,wrapAsync(listingcontroller.listingcreateroute))
router.get("/filter",listingcontroller.listingsortroute)    

//show listing
router.route("/:id")
    .get(wrapAsync(listingcontroller.showlisting))
    .put(isLogedIn,isOwner,upload.array("listing[images]",10),validatelisting, wrapAsync (listingcontroller.listingupdateroute));


//edit route
router.get("/:id/edit",isLogedIn,isOwner,wrapAsync (listingcontroller.listingeditroute));


router.delete("/deleting/:id",isLogedIn,isOwner, wrapAsync( listingcontroller.listingdestroyroute));
module.exports=router;