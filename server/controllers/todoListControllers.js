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
  deleteTask: function(req, res){
    let { _id } = req.body
    Todo.findByIdAndDelete({_id}, (err,data)=>{
      if(err){
        console.log(err)
      } else {
        User.findByIdAndUpdate({_id:data.userId}, {$pull:{"todo": data._id}}, {new:true}).populate("todos").exec((err, data)=>{
          if(err){
            console.log(err)
          } else {
            res.json(data)
          }
        })
      }
    })
  },
  editTask: function(req, res){
    let { _id, task } = req.body
    Todo.findByIdAndUpdate({_id}, {task}, {new:true}, (err, data)=>{
      if(err){
        console.log(err)
      } else {
        User.findById({_id:data.userId}).populate("todos").exec((err, data)=>{
          if(err){
            console.log(err)
          }else{
            res.json(data)
          }
        })
      }
    })
  }
};
