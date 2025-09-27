const mongoose=require("mongoose");

const Listing=require("../models/listing.js");
async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}
main().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
 const sampleListings = [
  {
    title: "Tropical Villa in Phuket",
    description: "Spacious villa with sea view and private pool.",
    images: [
      { url: "https://picsum.photos/seed/villa1a/800/600", filename: "villa1a.jpg" },
      { url: "https://picsum.photos/seed/villa1b/800/600", filename: "villa1b.jpg" },
      { url: "https://picsum.photos/seed/villa1c/800/600", filename: "villa1c.jpg" }
    ],
    category: "beachhouse",
    price: 18000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stylish loft apartment in the heart of the city.",
    images: [
      { url: "https://picsum.photos/seed/loft1a/800/600", filename: "loft1a.jpg" },
      { url: "https://picsum.photos/seed/loft1b/800/600", filename: "loft1b.jpg" },
      { url: "https://picsum.photos/seed/loft1c/800/600", filename: "loft1c.jpg" }
    ],
    category: "flat",
    price: 15000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Cozy Cabin in the Woods",
    description: "Rustic cabin surrounded by trees and fresh air.",
    images: [
      { url: "https://picsum.photos/seed/cabin1a/800/600", filename: "cabin1a.jpg" },
      { url: "https://picsum.photos/seed/cabin1b/800/600", filename: "cabin1b.jpg" },
      { url: "https://picsum.photos/seed/cabin1c/800/600", filename: "cabin1c.jpg" }
    ],
    category: "cabin",
    price: 9000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Treehouse Escape",
    description: "Unique treehouse stay with jungle views.",
    images: [
      { url: "https://picsum.photos/seed/treehouse1a/800/600", filename: "treehouse1a.jpg" },
      { url: "https://picsum.photos/seed/treehouse1b/800/600", filename: "treehouse1b.jpg" },
      { url: "https://picsum.photos/seed/treehouse1c/800/600", filename: "treehouse1c.jpg" }
    ],
    category: "treehouse",
    price: 6000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Minimalist Tiny Home",
    description: "Compact tiny house with modern interior.",
    images: [
      { url: "https://picsum.photos/seed/tiny1a/800/600", filename: "tiny1a.jpg" },
      { url: "https://picsum.photos/seed/tiny1b/800/600", filename: "tiny1b.jpg" },
      { url: "https://picsum.photos/seed/tiny1c/800/600", filename: "tiny1c.jpg" }
    ],
    category: "tinyhouse",
    price: 4500,
    location: "Portland",
    country: "USA"
  },
  {
    title: "Countryside Farmhouse",
    description: "Traditional farmhouse with open fields.",
    images: [
      { url: "https://picsum.photos/seed/farm1a/800/600", filename: "farm1a.jpg" },
      { url: "https://picsum.photos/seed/farm1b/800/600", filename: "farm1b.jpg" },
      { url: "https://picsum.photos/seed/farm1c/800/600", filename: "farm1c.jpg" }
    ],
    category: "farmhouse",
    price: 8500,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Beachfront Cottage",
    description: "Cottage with direct beach access.",
    images: [
      { url: "https://picsum.photos/seed/beach1a/800/600", filename: "beach1a.jpg" },
      { url: "https://picsum.photos/seed/beach1b/800/600", filename: "beach1b.jpg" },
      { url: "https://picsum.photos/seed/beach1c/800/600", filename: "beach1c.jpg" }
    ],
    category: "beachhouse",
    price: 20000,
    location: "Malibu",
    country: "USA"
  },
  {
    title: "Scandinavian Tiny House",
    description: "Minimalist design with glass walls.",
    images: [
      { url: "https://picsum.photos/seed/tiny2a/800/600", filename: "tiny2a.jpg" },
      { url: "https://picsum.photos/seed/tiny2b/800/600", filename: "tiny2b.jpg" },
      { url: "https://picsum.photos/seed/tiny2c/800/600", filename: "tiny2c.jpg" }
    ],
    category: "tinyhouse",
    price: 5000,
    location: "Stockholm",
    country: "Sweden"
  },
  {
    title: "Lakefront Cabin",
    description: "Charming cabin by a peaceful lake.",
    images: [
      { url: "https://picsum.photos/seed/cabin2a/800/600", filename: "cabin2a.jpg" },
      { url: "https://picsum.photos/seed/cabin2b/800/600", filename: "cabin2b.jpg" },
      { url: "https://picsum.photos/seed/cabin2c/800/600", filename: "cabin2c.jpg" }
    ],
    category: "cabin",
    price: 12000,
    location: "Ontario",
    country: "Canada"
  },
  {
    title: "Rustic Farmhouse",
    description: "Farmhouse with rustic interiors.",
    images: [
      { url: "https://picsum.photos/seed/farm2a/800/600", filename: "farm2a.jpg" },
      { url: "https://picsum.photos/seed/farm2b/800/600", filename: "farm2b.jpg" },
      { url: "https://picsum.photos/seed/farm2c/800/600", filename: "farm2c.jpg" }
    ],
    category: "farmhouse",
    price: 7000,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Skyline Loft",
    description: "Loft with breathtaking city views.",
    images: [
      { url: "https://picsum.photos/seed/loft2a/800/600", filename: "loft2a.jpg" },
      { url: "https://picsum.photos/seed/loft2b/800/600", filename: "loft2b.jpg" },
      { url: "https://picsum.photos/seed/loft2c/800/600", filename: "loft2c.jpg" }
    ],
    category: "flat",
    price: 16000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Hillside Cabin",
    description: "Cabin retreat in the mountains.",
    images: [
      { url: "https://picsum.photos/seed/cabin3a/800/600", filename: "cabin3a.jpg" },
      { url: "https://picsum.photos/seed/cabin3b/800/600", filename: "cabin3b.jpg" },
      { url: "https://picsum.photos/seed/cabin3c/800/600", filename: "cabin3c.jpg" }
    ],
    category: "cabin",
    price: 9500,
    location: "Colorado",
    country: "USA"
  },
  {
    title: "Treehouse Haven",
    description: "Eco-friendly treehouse in nature.",
    images: [
      { url: "https://picsum.photos/seed/treehouse2a/800/600", filename: "treehouse2a.jpg" },
      { url: "https://picsum.photos/seed/treehouse2b/800/600", filename: "treehouse2b.jpg" },
      { url: "https://picsum.photos/seed/treehouse2c/800/600", filename: "treehouse2c.jpg" }
    ],
    category: "treehouse",
    price: 7000,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Luxury Beach Villa",
    description: "Modern villa steps from the ocean.",
    images: [
      { url: "https://picsum.photos/seed/beach2a/800/600", filename: "beach2a.jpg" },
      { url: "https://picsum.photos/seed/beach2b/800/600", filename: "beach2b.jpg" },
      { url: "https://picsum.photos/seed/beach2c/800/600", filename: "beach2c.jpg" }
    ],
    category: "beachhouse",
    price: 25000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Tiny Urban Pod",
    description: "Compact tiny house in the city.",
    images: [
      { url: "https://picsum.photos/seed/tiny3a/800/600", filename: "tiny3a.jpg" },
      { url: "https://picsum.photos/seed/tiny3b/800/600", filename: "tiny3b.jpg" },
      { url: "https://picsum.photos/seed/tiny3c/800/600", filename: "tiny3c.jpg" }
    ],
    category: "tinyhouse",
    price: 3500,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Countryside Villa",
    description: "Spacious villa with gardens and pool.",
    images: [
      { url: "https://picsum.photos/seed/villa2a/800/600", filename: "villa2a.jpg" },
      { url: "https://picsum.photos/seed/villa2b/800/600", filename: "villa2b.jpg" },
      { url: "https://picsum.photos/seed/villa2c/800/600", filename: "villa2c.jpg" }
    ],
    category: "farmhouse",
    price: 14000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Seaside Treehouse",
    description: "Treehouse with ocean breeze.",
    images: [
      { url: "https://picsum.photos/seed/treehouse3a/800/600", filename: "treehouse3a.jpg" },
      { url: "https://picsum.photos/seed/treehouse3b/800/600", filename: "treehouse3b.jpg" },
      { url: "https://picsum.photos/seed/treehouse3c/800/600", filename: "treehouse3c.jpg" }
    ],
    category: "treehouse",
    price: 8000,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "Rustic Tiny Home",
    description: "Tiny home with a rustic vibe.",
    images: [
      { url: "https://picsum.photos/seed/tiny4a/800/600", filename: "tiny4a.jpg" },
      { url: "https://picsum.photos/seed/tiny4b/800/600", filename: "tiny4b.jpg" },
      { url: "https://picsum.photos/seed/tiny4c/800/600", filename: "tiny4c.jpg" }
    ],
    category: "tinyhouse",
    price: 4200,
    location: "Vienna",
    country: "Austria"
  },
  {
    title: "Mountain Retreat Cabin",
    description: "Cabin with snowy mountain views.",
    images: [
      { url: "https://picsum.photos/seed/cabin4a/800/600", filename: "cabin4a.jpg" },
      { url: "https://picsum.photos/seed/cabin4b/800/600", filename: "cabin4b.jpg" },
      { url: "https://picsum.photos/seed/cabin4c/800/600", filename: "cabin4c.jpg" }
    ],
    category: "cabin",
    price: 11000,
    location: "Swiss Alps",
    country: "Switzerland"
  },
  {
    title: "Island Beach House",
    description: "Relaxing beach house on a private island.",
    images: [
      { url: "https://picsum.photos/seed/beach3a/800/600", filename: "beach3a.jpg" },
      { url: "https://picsum.photos/seed/beach3b/800/600", filename: "beach3b.jpg" },
      { url: "https://picsum.photos/seed/beach3c/800/600", filename: "beach3c.jpg" }
    ],
    category: "beachhouse",
    price: 30000,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Urban Studio Loft",
    description: "Compact loft in a vibrant neighborhood.",
    images: [
      { url: "https://picsum.photos/seed/loft3a/800/600", filename: "loft3a.jpg" },
      { url: "https://picsum.photos/seed/loft3b/800/600", filename: "loft3b.jpg" },
      { url: "https://picsum.photos/seed/loft3c/800/600", filename: "loft3c.jpg" }
    ],
    category: "flat",
    price: 12000,
    location: "Paris",
    country: "France"
  }
];

module.exports = { data: sampleListings };
const initdb=async()=>{
  await Listing.deleteMany({})
  let sample= sampleListings.map((obj)=>({...obj,owner:"688909cec2431b6cc62ef8cd"}));

let data= await Listing.insertMany(sample);
console.log("data added");
console.log(data);
}
initdb();