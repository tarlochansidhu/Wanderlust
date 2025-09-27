const Listing=require("../models/listing.js");
module.exports.index=async(req,res)=>{
    let listings=await Listing.find();
    res.render("./listings/home.ejs",{listings});
    console.log("request succes");
};
module.exports.listingcreateform=(req,res)=>{
     res.render("./listings/create.ejs");
    
};
module.exports.showlisting=async(req,res)=>{
      let {id}=req.params;
      let  listing=await Listing.findById(id).populate({path:'reviews',populate:{path:"author"}}).populate('owner');
      console.log(listing)
     if(!listing){
        req.flash("error","No listing found");
        res.redirect("/listings");
     }
     else{
    res.render("./listings/show.ejs",{listing});
     }
};
module.exports.listingcreateroute= async(req,res)=>{
//      let url=req.file.path;
//      let filename=req.file.filename;
//      console.log(req.body.listing);
//     let newlisting =  new Listing(req.body.listing);
//     newlisting.owner=req.user._id;
//     newlisting.image={url,filename};
//   await newlisting.save();
//    req.flash("success","New listing created");
//   res.redirect("/listings");
//   try {
    console.log(req.files);
    console.log(req.body.listing);

    // Create new listing object
    let newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;

    // Map multiple files to images array
    newlisting.images = req.files.map(f => ({
      url: f.path,       // Cloudinary will return `path` as the URL if using multer-storage-cloudinary
      filename: f.filename
    }));

    await newlisting.save();

    res.redirect(`/listings/${newlisting._id}`);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error creating listing");
//   }

  
  };
module.exports.listingsortroute=async(req,res)=>{
   let category=req.query.category;
let sortedlistings= await Listing.find({category:category});

res.render("./listings/sort.ejs",{sortedlistings});
}  
module.exports.listingeditroute=async(req,res)=>{
    let {id}=req.params;
     
    let listing=await Listing.findById(id);
    
if(!listing){
        req.flash("error","No listing found");
        res.redirect("/listings");
     }
     
    res.render("./listings/edit.ejs",{listing});
};
module.exports.listingupdateroute=async(req,res)=>{
    let {id}=req.params;
    console.log("hello")
    
     let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

  // If new files uploaded, add them to the images array
  if (req.files && req.files.length > 0) {
    let newImages = req.files.map(f => ({
      url: f.path,       // Cloudinary URL
      filename: f.filename
    }));
    listing.images.push(...newImages); // Append new images
    await listing.save();
  }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
};
module.exports.listingdestroyroute=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    console.log("deleted");
    req.flash("success","deleted listings");

    res.redirect("/listings");
};
