const Todo = require("../db/models/Todo");
const User = require("../db/models/User");

module.exports = {
  sayHi: function (req, res) {
    //console.log(req.body)
    res.json("Hi");
  },
  makeTestTask: function (req, res) {
    let { task, id } = req.body;
    let newTask = new Todo({ task });
    newTask.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        User.findByIdAndUpdate(
          { _id: id },
          { $push: { 'todos': data } },
          { new: true }
        )
          .populate("todos")
          .exec((err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.json(data);
            }
          });
      }
    });
  },
};
