const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { PORT } = process.env;

// middleware for cors
app.use(cors());

// middleware for json format
app.use(express.json());

// middleware for generating token

// serve static files from server
app.use("/static-files", express.static("public"));

// routes - xbox & PS games
const xboxPsRoutes = require("./routes/routes-xbox-ps");
app.use("/games", xboxPsRoutes);

// listen to Port
app.listen(PORT, () => {
  console.log("Listening to server on ", PORT);
});
