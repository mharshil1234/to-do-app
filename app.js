const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/todo_express")
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

app.listen(5000, () => {
    console.log("Port: 5000")
});