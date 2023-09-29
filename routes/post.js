const postRoute = require("express").Router();
const { PostController } = require("../controllers");

postRoute.get("/", PostController.getPosts);
postRoute.get("/create", PostController.createPost);
postRoute.post("/create", PostController.create);
postRoute.get("/like", PostController.like);
postRoute.get("/delete", PostController.delete);
postRoute.get("/update", PostController.updatePost);
postRoute.post("/update", PostController.update);
// postRoute.get("/:id", PostController.getLikesPost);

module.exports = postRoute;
