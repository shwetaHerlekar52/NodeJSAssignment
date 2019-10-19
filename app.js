const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");

const app = express();

const port = 3000;

app.use("/user", user);

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
