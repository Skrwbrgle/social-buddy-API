const userRoute = require("express").Router();
const { UserController } = require("../controllers");

userRoute.get("/profile", UserController.getUsers);
userRoute.get("/signup", UserController.signUp);
userRoute.get("/signin", UserController.signIn);
userRoute.post("/login", UserController.login);
userRoute.post("/signup", UserController.create);
userRoute.get("/delete", UserController.delete);
userRoute.get("/profile/update", UserController.editProfile);
userRoute.post("/profile/update", UserController.update);
userRoute.get("/profile/update/post", UserController.updatePost);
userRoute.get("/profile/delete/post", UserController.deletePost);

module.exports = userRoute;
