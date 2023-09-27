const commentRoute = require("express").Router();
const { CommentController } = require("../controllers");

commentRoute.get("/", CommentController.getComments);
// commentRoute.get("/add", CommentController.createPage);
commentRoute.post("/create", CommentController.create);
commentRoute.delete("/delete/:id", CommentController.delete);
// commentRoute.get("/update/:id", CommentController.editPage);
commentRoute.put("/update/:id", CommentController.update);

module.exports = commentRoute;
