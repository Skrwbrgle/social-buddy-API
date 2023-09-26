const { like, post, user } = require("../models");

class LikeController {
  static async getLikes(req, res) {
    try {
      const result = await like.findAll({
        include: [user, post],
        order: [["id", "asc"]],
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { userId, postId } = req.body;

      let resultLike = await like.create({
        userId,
        postId,
        dateLike: Date.now(),
      });

      res.json(resultLike);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = LikeController;
