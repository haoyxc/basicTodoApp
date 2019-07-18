const express = require("express");
const app = express();

// This line makes the build folder publicly available.
app.use(express.static("build"));

app.listen(3000, () => {
  console.log("Server for React Todo App listening on port 3000!");
});
const mongoose = require("mongoose");

const todoItemSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const TodoItem = mongoose.model("Todo", todoItemSchema);

module.exports = TodoItem;
