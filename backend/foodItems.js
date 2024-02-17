const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let foodItems, foodCat;
async function display() {
    // await mongoose.connect("mongodb://localhost:27017/gofood");
    await mongoose.connect("mongodb+srv://hgoutam2001:ecommerce@cluster0.pzsxlbg.mongodb.net/Ecommerce?retryWrites=true&w=majority");
    console.log("db connectedd");
    const items = mongoose.connection.db.collection("food_items");
    foodItems = await items.find({}).toArray();
    const category = mongoose.connection.db.collection("food_category");
    foodCat = await category.find({}).toArray();
}
display();
router.post("/fooditem", (req, res) => {
    try {
        res.send([foodItems, foodCat]);
        console.log(foodItems)
    } catch (e) {
        console.log(e);
    }
    console.log("fooditems")
});
module.exports = router;
