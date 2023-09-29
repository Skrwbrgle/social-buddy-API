const route = require("express").Router();

route.get("/", (req, res) => {
  // res.json({
  //   message: "Home Page",
  // });
  res.render("index.ejs");
});

const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const likeRoutes = require("./like");

route.use("/users", userRoutes);
route.use("/posts", postRoutes);
route.use("/comments", commentRoutes);
route.use("/likes", likeRoutes);

module.exports = route;
