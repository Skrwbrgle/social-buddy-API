const commentRoute = require("express").Router();
const { CommentController } = require("../controllers");

// commentRoute.get("/", CommentController.getBrands);
// commentRoute.get("/add", CommentController.createPage);
// commentRoute.post("/add", CommentController.create);
// commentRoute.get("/delete/:id", CommentController.delete);
// commentRoute.get("/update/:id", CommentController.editPage);
// commentRoute.post("/update/:id", CommentController.update);

module.exports = commentRoute;
