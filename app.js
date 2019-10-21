const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");

const app = express();
app.use(
  session({
    secret: "ssshhhhh",
    saveUninitialized: false,
    resave: false
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

app.use("/user", user);

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
