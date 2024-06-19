const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => res.send("Index Route"));
app.get("/getting", (req, res) => res.send("Getting Routes"));

app.listen(process.env.PORT, (req, res) => {
     console.log(`Server running on port ${process.env.PORT}`)
     return res.send("Index Routing Home")
});
