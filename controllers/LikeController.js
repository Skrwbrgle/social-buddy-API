const { like, post, user } = require("../models");

class LikeController {
  static async getLikes(req, res) {
    try {
      const result = await like.findAll({
        include: [
          user,
          {
            model: post,
            attribute: ["userId"],
          },
        ],
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

  static async delete(req, res) {
    try {
      const { userId, postId } = req.body;
      let resultLike = await like.destroy({
        where: { userId, postId },
      });

      // let usersLike = resultLike.map((el) => {
      //   return el.user;
      // });

      resultLike === 1
        ? res.json({ message: `Successfully deleted comment with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
      // console.log(req.body);
      // res.json(resultLike);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = LikeController;
