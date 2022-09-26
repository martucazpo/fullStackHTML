const User = require("../db/models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  authUser: function (req, res) {
    let { _id } = req.params;
    User.findById({ _id })
      .populate("todos")
      .exec((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      });
  },
  createUser: function (req, res) {
    let { firstName, lastName, email, password1, password2 } = req.body;
    if (password1 !== password2) {
      return res.json({ message: "passwords do not match" });
    } else {
      User.findOne({ email }, (err, data) => {
        if (err) {
          console.log(err);
        } else if (data) {
          return res.json({ message: "This email is already in the database" });
        } else {
          let password = bcrypt.hashSync(password1, 10);
          let newUser = new User({
            firstName,
            lastName,
            email,
            password,
            isLoggedIn: true,
          });
          newUser.save((err, data) => {
            if (err) {
              console.log(err);
            } else {
              return res.json(data);
            }
          });
        }
      });
    }
  },
  loginUser: function (req, res) {
    let { email, password } = req.body;
    User.findOne({ email }, (err, data) => {
      if (!data) {
        return res.json({
          message: "This email is not in the database, please register",
        });
      } else {
        if (!bcrypt.compareSync(password, data.password)) {
          return res.json({ message: "There was a problem with the password" });
        } else {
          User.findByIdAndUpdate(
            { _id: data._id },
            { isLoggedIn: true },
            { new: true }
          )
            .populate("todos")
            .exec((err, data) => res.json(data));
        }
      }
    });
  },
  logoutUser: function(req, res){
    let {_id} = req.body
    User.findByIdAndUpdate({_id},{isLoggedIn:false},{new:true}, (err, data)=>{
      if(err){
        console.log(err)
      } else {
        return res.json({ _id: data._id, isLoggedIn: false})
      }
    })
  }
};
