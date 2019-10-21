const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.add = async (req, res) => {
  console.log(`in function add`);
  if (req.session.user) {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob
    });
    await user
      .save()
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message || "Some error occurred while creating the User."
        });
      });
  } else {
    return res.status(200).send({
      message: "Please login to add new user"
    });
  }
};

exports.signup = (req, res) => {
  console.log("in function signup");
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob
  });
  user
    .save()
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

exports.modify = async (req, res) => {
  console.log(`in function modify`);
  if (req.session.user) {
    if (!req.body) {
      return res.status(400).send({
        message: "User details can not be empty"
      });
    }
    await User.findOneAndUpdate(
      {
        email: req.params.email
      },
      {
        name: req.body.name,
        dob: req.body.dob
      }
    )
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User not found with email " + req.params.email
          });
        }
        return res.send(user);
      })
      .catch(err => {
        console.log(`${err}`);
        return res.status(500).send({
          message: "Error updating user with email " + req.params.email
        });
      });
  } else {
    return res.status(200).send({
      message: "Please login to modify user"
    });
  }
};

exports.delete = async (req, res) => {
  console.log(`in function delete`);
  if (req.session.user) {
    await User.findOneAndRemove({ email: req.params.email })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User not found with email " + req.params.email
          });
        }
        return res.send({ message: "User deleted successfully!" });
      })
      .catch(err => {
        console.log(`${err}`);
        return res.status(500).send({
          message: "Could not delete user with email " + req.params.email
        });
      });
  } else {
    return res.status(200).send({
      message: "Please login to delete user"
    });
  }
};

exports.get = async (req, res) => {
  console.log(`in function get`);
  if (req.session.user) {
    await User.findOne({ email: req.params.email })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "Note not found with email " + req.params.email
          });
        }
        return res.send(user);
      })
      .catch(err => {
        console.log(`${err}`);
        return res.status(500).send({
          message: "Could not delete user with email " + req.params.email
        });
      });
  } else {
    return res.status(200).send({
      message: "Please login to get user"
    });
  }
};

exports.login = (req, res) => {
  console.log("in function login");
  console.log(req.session.user);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = user;
          return res.status(200).send({
            message: "User logged in successfully!!"
          });
        } else {
          return res.status(200).send({
            message: "Wrong password. Please insert the correct one"
          });
        }
      }
      return res.status(204).send({
        message: "Please signup to login"
      });
    })
    .catch(err => {
      console.log(`${err.message}`);
      return res.status(500).send({
        message: "Error retrieving logging with email " + req.params.email
      });
    });
};

exports.logout = (req, res) => {
  console.log("in function logout");
  var sess = req.session.user;
  if (sess) {
    req.session.user = null;
    return res.status(200).send({
      message: "User successfully logged out!!"
    });
  } else {
    return res.status(200).send({
      message: "Please login"
    });
  }
};
