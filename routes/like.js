const likeRoute = require("express").Router();
const { LikeController } = require("../controllers");

likeRoute.get("/", LikeController.getLikes);
// likeRoute.get("/add", LikeController.createPage);
likeRoute.post("/create", LikeController.create);
likeRoute.get("/delete", LikeController.delete);
// likeRoute.get("/update/:id", LikeController.editPage);

// likeRoute.get("/delete/:id/post", LikeController.delete);

module.exports = likeRoute;
