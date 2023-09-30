const { comment, user, post } = require("../models");
class CommentController {
  static async getComments(req, res) {
    try {
      const { id, postId } = req.query;

      const resultPost = await post.findOne({
        where: {
          id: +postId,
        },
        include: [
          {
            model: comment,
            where: {
              postId: +postId,
            },
          },
        ],
        order: [["id", "desc"]],
      });

      const idUser = +resultPost.userId;
      const userPost = await user.findOne({
        where: { id: idUser },
      });

      // console.log(comments);
      res.json(resultPost);
      // res.render("comments.ejs", { post: result });
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

      // res.json(resultComment);
      res.redirect(`/posts/comments?id=${+userId}&postId=${+postId}`);
    } catch (err) {
      if (err.name === "SequelizeValidationError") {
        const errorMessage = err.errors[0].message;

        if (errorMessage === "Validation notEmpty on textComment failed") {
          return res.redirect("back");
        }
      } else {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      }
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
      const { id, postId, commentId } = req.query;
      let resultComment = await comment.destroy({
        where: {
          id: +commentId,
          userId: +id,
        },
      });

      resultComment === 1
        ? res.redirect(`/posts/comments?id=${+id}&postId=${+postId}`) //res.json({ message: `Successfully deleted comment with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CommentController;
