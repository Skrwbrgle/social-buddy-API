const postRoute = require("express").Router();
const { PostController } = require("../controllers");

postRoute.get("/", PostController.getPosts);
// postRoute.get("/add", PostController.createPage);
postRoute.post("/create", PostController.create);
postRoute.delete("/delete/:id", PostController.delete);
// postRoute.get("/update/:id", PostController.editPage);
postRoute.put("/update/:id", PostController.update);

postRoute.get("/:id", PostController.getLikesPost);

module.exports = postRoute;
