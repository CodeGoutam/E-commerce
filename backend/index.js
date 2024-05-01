const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
app.use(cors());
console.log("db connectedd");
app.use(express.json());
express.urlencoded({ extended: true });
app.use("/", (req, res) => {
    res.send("backend conneceted")
});
app.use("/api", require("./foodItems"));
app.use("/api", require("./signUp"));
app.use("/api", require("./signIn"));
app.use("/api", require("./Orders"));
app.use("/api", require("./Myorders"));


app.listen(5000, () => {
    console.log("server is running")
});
