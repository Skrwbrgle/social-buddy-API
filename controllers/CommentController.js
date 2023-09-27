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

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { textComment, image } = req.body;
      let resultComment = await comment.update(
        {
          textComment,
          image,
        },
        { where: { id } }
      );

      resultComment
        ? res.json({ message: `Successfully updatees!` })
        : res.json({ message: `comment with ${id} can not update!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultComment = await comment.destroy({ where: { id } });

      resultComment === 1
        ? res.json({ message: `Successfully deleted comment with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CommentController;
