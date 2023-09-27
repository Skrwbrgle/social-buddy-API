const { post, comment, like, user } = require("../models");
class PostController {
  static async getPosts(req, res) {
    try {
      const result = await post.findAll(
        // ({
        //   include: { all: true, nested: true },
        // });
        {
          include: [user, comment],
          order: [["id", "asc"]],
        }
      );

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async getLikesPost(req, res) {
    try {
      const id = +req.params.id;

      let resultLike = await like.findAll({
        where: {
          postId: id,
        },
        include: [post, user],
      });

      let usersLike = resultLike.map((el) => {
        return el.user.dataValues;
      });

      let postLikes = { ...resultLike[0].post.dataValues, likes: usersLike };

      // console.log(postLikes);
      res.json(postLikes);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { textPost, userId, likeId } = req.body;

      let resultPost = await post.create({
        textPost,
        userId,
        likeId,
      });

      res.json(resultPost);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { textPost, image } = req.body;
      let resultPost = await post.update(
        {
          textPost,
          image,
        },
        { where: { id } }
      );

      resultPost
        ? res.json({ message: `Successfully updatees!` })
        : res.json({ message: `Post with ${id} can not update!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultPost = await post.destroy({ where: { id } });
      let resultComment = await comment.destroy({ where: { postId: id } });
      let resultLike = await like.destroy({ where: { postId: id } });

      resultPost === 1
        ? res.json({ message: `Successfully deleted post with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = PostController;
