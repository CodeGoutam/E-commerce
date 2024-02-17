const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");



display();
router.post("/fooditem", async(req, res) => {
    try {
        const items = mongoose.connection.db.collection("food_items");
    const category = mongoose.connection.db.collection("food_category");
        let foodItems = await items.find({}).toArray();
        let foodCat = await category.find({}).toArray();

        res.send([foodItems, foodCat]);
        console.log(foodItems)
    } catch (e) {
        console.log(e);
    }
    console.log("fooditems")
});
module.exports = router;
