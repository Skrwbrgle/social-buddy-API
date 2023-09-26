const userRoute = require("express").Router();
const { UserController } = require("../controllers");

userRoute.get("/", UserController.getUsers);
// userRoute.get("/add", UserController.createPage);
userRoute.post("/create", UserController.create);
userRoute.get("/delete/:id", UserController.delete);
// userRoute.get("/update/:id", UserController.editPage);
userRoute.post("/update/:id", UserController.update);

module.exports = userRoute;
