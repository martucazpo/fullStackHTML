const Todo = require("../db/models/Todo");
const User = require("../db/models/User");

module.exports = {
  findUserList: function (req, res) {
    let { _id } = req.params
    User.findById({_id}).populate("todos").exec((err, data)=>{
      if(err){
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },
  makeTask: function (req, res) {
    let { task, userId } = req.body;
    let newTask = new Todo({ task, userId });
    newTask.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        User.findByIdAndUpdate(
          { _id: data.userId },
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
