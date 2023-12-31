require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use("/users/profile", express.static(__dirname + "/public"));
app.use("/users/signup", express.static(__dirname + "/public"));
app.use("/users/signin", express.static(__dirname + "/public"));
app.use("/posts/comments", express.static(__dirname + "/public"));
app.use("/posts/create", express.static(__dirname + "/public"));
app.use("/users/profile/update/post", express.static(__dirname + "/public"));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
