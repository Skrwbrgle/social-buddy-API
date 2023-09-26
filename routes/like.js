const likeRoute = require("express").Router();
const { LikeController } = require("../controllers");

likeRoute.get("/", LikeController.getLikes);
// likeRoute.get("/add", FollowerController.createPage);
likeRoute.post("/create", LikeController.create);
// likeRoute.get("/delete/:id", FollowerController.delete);
// likeRoute.get("/update/:id", FollowerController.editPage);
// likeRoute.post("/update/:id", FollowerController.update);

module.exports = likeRoute;
