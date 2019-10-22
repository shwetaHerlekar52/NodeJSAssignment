const Post = require("../models/post.model");

exports.add = async (req, res) => {
  console.log(`in function add post`);
  if (req.session.user) {
    let post = new Post({
      user: req.body.user,
      content: req.body.content,
      date_posted: req.body.date_posted
    });
    await post
      .save()
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message || "Some error occurred while creating the Post."
        });
      });
  } else {
    return res.status(200).send({
      message: "Please login to add new post"
    });
  }
};
