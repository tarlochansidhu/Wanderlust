const joi = require("joi");
const Review = require("./models/reviews");
// const Listing = require("./models/listing");
module.exports.listingschema=joi.object({
    listing:joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        image:joi.string().allow("",null),
        price:joi.number().required().min(0),
        category:joi.string().required().valid("cabin", "treehouse", "beachhouse", "flat", "tinyhouse", "farmhouse"),
        location:joi.string().required(),
        country:joi.string().required(),

        

    }).required(),
});
// const Review=require("./models/reviews");
module.exports.reviewschema=joi.object({
    review:joi.object({
        rating:joi.number().required().min(1).max(5),
        comment:joi.string().required(),
    }).required(),
});