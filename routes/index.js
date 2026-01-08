const router = require("express").Router();
const ToDo = require("../models/todo");

// Routes
router.get("/", async (req, res) => {
    const todos = await ToDo.find();
    res.render("index", {todos});
});

module.exports = router;