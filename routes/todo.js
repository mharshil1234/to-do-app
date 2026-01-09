const router = require("express").Router();
const ToDo = require("../models/todo");

// Add To-Do
router.post("/add", async (req, res) => {
  try {
    const newtodo  = req.body.todo;
    await ToDo.create({ title: newtodo });
    res.redirect("/");
  }
  catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

// Delete To-Do
router.post("/delete/:id", async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);
    res.redirect("/");
  }
  catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

// Toggle Check Box
router.post("/toggle-checkbox/:id", async (req, res) => {
    try {
        const todo = await ToDo.findById(req.params.id);
        if(todo.completed) {
          await ToDo.findByIdAndUpdate(req.params.id, {completed: false});
        }
        else {
          await ToDo.findByIdAndUpdate(req.params.id, {completed: true});
        }
        res.redirect("/");
    }
    catch (err) {
        console.log(err);
        res.redirect("/");
    }
});

//Edit To-Do
router.post("/editTask/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = req.body.todoTitle;
    await ToDo.findByIdAndUpdate(taskId, {title: updatedTask});
    res.redirect("/");
  }
  catch (err) {
    console.log(err);
    res.redirect("/");
  }
})

module.exports = router;