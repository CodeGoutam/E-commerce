const express = require("express");
const app = express();
const cors = require('cors')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", `http://localhost:3000`);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(cors(
    {
        origin: ["https://e-commerce-f-one.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());
express.urlencoded({ extended: true });
app.use("/api", require("./foodItems"));
app.use("/api", require("./signUp"));
app.use("/api", require("./signIn"));
app.use("/api", require("./Orders"));
app.use("/api", require("./Myorders"));
app.use("/", (req, res) => {
    res.send("Backend ")
    console.log("backend")
})

app.listen(5000,()=>{
    console.log("server is running")
});
