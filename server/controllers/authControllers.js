const User = require("../db/models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  sayHello: function (req, res) {
    //console.log(req.body)
    res.json("HELLO");
  },
  testCreateUser: function (req, res) {
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
          let newUser = new User({ firstName, lastName, email, password });
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
};
