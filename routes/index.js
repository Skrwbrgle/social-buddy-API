const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");

route.use("/users", userRoutes);
route.use("/post", postRoutes);
route.use("/comments", commentRoutes);

module.exports = route;
