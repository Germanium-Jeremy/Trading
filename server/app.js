const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["*", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => res.send("Index Route"));
app.get("/", (req, res) => {
     res.send("Index route for our chat app ..");
});

const port = process.env.PORT || 15000;

app.listen(port, () => console.log("Server Running on port: " + port));
