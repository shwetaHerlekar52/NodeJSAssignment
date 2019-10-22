const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let postSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  content: {
    type: String,
    required: true
  },
  date_posted: {
    type: String,
    required: true
  }
});

postSchema.path("content").validate(function(email) {
  return content === content.toLowerCase();
}, "Invalid Post");

module.exports = mongoose.model("Post", postSchema);
