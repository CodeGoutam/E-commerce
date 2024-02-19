const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let foodItems;
let foodCat;
const display = async () => {
    // await mongoose.connect("mongodb://localhost:27017/gofood")
    await mongoose.connect("mongodb+srv://hgoutam2001:ecommerce@cluster0.pzsxlbg.mongodb.net/gofood?retryWrites=true&w=majority")
    const items = mongoose.connection.db.collection("food_items");
    const category = mongoose.connection.db.collection("food_category");
    foodItems = await items.find({}).toArray();
    foodCat = await category.find({}).toArray();

}
display()
router.post("/fooditem", (req, res) => {

    try {

        res.send([foodItems, foodCat]);
        // console.log(foodItems)
    } catch (e) {
        console.log(e);
    }

});
module.exports = router;
