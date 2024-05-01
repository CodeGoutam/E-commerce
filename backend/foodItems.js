const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let foodItems;
let foodCat;
const display = async () => {
    // await mongoose.connect("mongodb://localhost:27017/gofood")
    await mongoose.connect("mongodb+srv://gofood:gofood@cluster0.qjptync.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const items = mongoose.connection.db.collection("food_items");
    const category = mongoose.connection.db.collection("food_category");
    foodItems = await items.find({}).toArray();
    foodCat = await category.find({}).toArray();
}
display()
router.post("/fooditem", (req, res) => {
    res.send([foodItems, foodCat]);
});
module.exports = router;
