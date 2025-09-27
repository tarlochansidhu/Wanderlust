const mongoose=require("mongoose");

const Review=require("./reviews.js");
const User=require("./user.js");
const { string, required } = require("joi");
const listing=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    images:[{
      url:String,
      filename:String,
    }],
     category: {
    type: String,
    enum: ["cabin", "treehouse", "beachhouse", "flat","tinyhouse","farmhouse"], // only these values allowed
   required:true,
  },
    price:Number,
    location:String,
    country:String,
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review",
    }],
    owner:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
    }
});
listing.post("findOneAndDelete",async(listing)=>{
if(listing){
    await Review.deleteMany({_id:{$in: listing.reviews}});
}
});
const Listing=mongoose.model("Listing",listing);
module.exports=Listing;