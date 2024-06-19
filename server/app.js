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
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("Index Route"));
app.get("/getting", (req, res) => res.send("Getting Routes"));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
