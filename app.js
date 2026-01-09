const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

// Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
const homeRoute = require("./routes/index");
const todoRoute = require("./routes/todo");

app.use("/", homeRoute);
app.use("/todo", todoRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});