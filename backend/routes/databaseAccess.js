const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

router.post("/", (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task
  });
  //   console.log(req.body, "????");
  //   console.log(testTodo, "!!!");
  testTodo
    .save()
    .then(response => {
      console.log("saved!");
      console.log(response);
      res.send(response);
      //   res.redirect("/");
    })
    .catch(error => {
      console.log("error!");
      res.send(error);
    });
});

router.get("/all", (req, res) => {
  TodoItem.find({})
    .then(response => res.send(response))
    .catch(err => {
      res.send(err);
    });
});

router.post("/toggle", (req, res) => {
  TodoItem.findById(req.body.id)
    .then(item => {
      item.completed = !item.completed;
      item
        .save()
        .then(resp => {
          res.send(resp);
        })
        .catch(error => res.send(error));
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/remove", (req, res) => {
  TodoItem.deleteOne({ _id: req.body.id }, err => {
    TodoItem.find({})
      .then(resp => {
        res.send(resp);
        console.log(resp);
      })
      .catch(err => {
        res.send(err);
      });
  });
});

module.exports = router;
