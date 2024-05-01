const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
express.urlencoded({ extended: true });
app.get("/", (req, res) => {
    res.send("backend connected")
});
app.use("/api", require("./foodItems"));
app.use("/api", require("./signUp"));
app.use("/api", require("./signIn"));
app.use("/api", require("./Orders"));
app.use("/api", require("./Myorders"));
app.listen(5000, () => {
    console.log("server is running")
});
