const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", `http://localhost:3000`);
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
app.use(cors(
    {
        origin: [`https://e-commerce-f-one.vercel.app`],
        // origin: [`http://localhost:3000`],
        methods: ["POST", "GET", "OPTION"],
        credentials: true
    }
));
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
