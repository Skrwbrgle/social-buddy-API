const { comment, user, post } = require("../models");
class CommentController {
  static async getComments(req, res) {
    try {
      const result = await comment.findAll({
        include: [post, user],
        order: [["id", "asc"]],
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { textComment, postId, userId } = req.body;

      let resultComment = await comment.create({
        textComment,
        postId,
        userId,
      });

      res.json(resultComment);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CommentController;
