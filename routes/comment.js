const commentRoute = require("express").Router();
const { CommentController } = require("../controllers");

commentRoute.get("/", CommentController.getComments);
// commentRoute.get("/add", CommentController.createPage);
commentRoute.post("/add-comment", CommentController.create);
commentRoute.get("/add-comment", CommentController.delete);
// commentRoute.get("/update/:id", CommentController.editPage);
commentRoute.post("/update/:id", CommentController.update);

module.exports = commentRoute;
