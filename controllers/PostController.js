const { post, comment, like } = require("../models");
class PostController {
  static async getPosts(req, res) {
    try {
      const result = await post.findAll({
        include: [comment],
        order: [["id", "asc"]],
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { textPost, userId } = req.body;

      let resultUser = await post.create({
        textPost,
        userId,
      });

      res.json(resultUser);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = PostController;
