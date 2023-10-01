// const { text } = require("express");
const { post, comment, like, user } = require("../models");
const { use } = require("../routes");
class PostController {
  static async getPosts(req, res) {
    try {
      let result = await post.findAll({
        include: [
          {
            model: user,
            attributes: ["id", "username", "image"],
          },
          comment,
        ],
        order: [["id", "asc"]],
      });

      let resultLike = await like.findAll();

      let posts = result.map((el) => {
        const postData = el.dataValues;
        const userData = postData.user;
        const commentData = postData.comment;
        const likesData = resultLike.filter(({ dataValues: like }) => {
          return postData.id == like.postId;
        });

        return {
          ...postData,
          user: userData,
          likes: likesData,
        };
      });

      let users = await user.findAll();
      const id = +req.query.id;
      let oneUser = await user.findByPk(id);

      // console.log(oneUser);
      // res.json({ posts, users, user: oneUser });
      res.render("home.ejs", { posts, users, user: oneUser });
    } catch (err) {
      console.error(err);
      res.json(err);
    }
  }

  static async like(req, res) {
    try {
      const { id, postId } = req.query;

      let likesData = await like.findOne({
        where: {
          userId: +id,
          postId: +postId,
        },
      });

      if (!likesData) {
        let resultLike = await like.create({
          userId: +id,
          postId: +postId,
          dateLike: Date.now(),
        });
      } else {
        let resultLike = await like.destroy({
          where: { userId: +id, postId: +postId },
        });
      }

      // res.json(likesData);
      res.redirect(`/posts?id=${id}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async likeInPost(req, res) {
    try {
      const { id, postId } = req.query;

      let likesData = await like.findOne({
        where: {
          userId: +id,
          postId: +postId,
        },
      });

      if (!likesData) {
        let resultLike = await like.create({
          userId: +id,
          postId: +postId,
          dateLike: Date.now(),
        });
      } else {
        let resultLike = await like.destroy({
          where: { userId: +id, postId: +postId },
        });
      }

      // res.json(likesData);
      res.redirect(`/posts/comments?id=${+id}&postId=${+postId}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async createPost(req, res) {
    try {
      const id = +req.query.id;
      let users = await user.findAll();
      let oneUser = await user.findByPk(id);

      res.render("createPost.ejs", { users, user: oneUser });
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePost(req, res) {
    try {
      const { id, postId } = req.query;
      let users = await user.findAll();
      let oneUser = await user.findByPk(id);
      let onePost = await post.findOne({
        where: {
          id: +postId,
          userId: +id,
        },
      });

      // res.json(onePost);
      res.render("updatePost.ejs", { post: onePost, users, user: oneUser });
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
      // res.render("home.ejs", { postLikes });
      res.json(postLikes);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const id = +req.query.id;
      const { textPost, image } = req.body;
      const imageUrl = image === "" ? null : image;

      let addPost = await post.create({
        textPost,
        image: imageUrl,
        userId: id,
      });

      // res.json(addPost);
      res.redirect(`/posts?id=${id}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const { id, postId } = req.query;
      const { textPost, image } = req.body;
      const imageUrl = image === "" ? null : image;

      let resultPost = await post.update(
        {
          textPost,
          image: imageUrl,
        },
        {
          where: {
            userId: +id,
            id: +postId,
          },
        }
      );

      resultPost
        ? res.redirect(`/posts?id=${+id}`) // res.json({ message: `Successfully updatees!` })
        : res.json({ message: `Post with ${id} can not update!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const { id, postId } = req.query;
      let resultPost = await post.destroy({
        where: {
          id: +postId,
          userId: +id,
        },
      });
      let resultComment = await comment.destroy({ where: { postId: +postId } });
      let resultLike = await like.destroy({ where: { postId: +postId } });

      resultPost === 1
        ? res.redirect(`/posts?id=${+id}`) //res.json({ message: `Successfully deleted post with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
    } catch (err) {
      res.json(err);
    }
  }

  static async commentPage(req, res) {
    try {
      const { id, postId } = req.query;

      let resultLike = await like.findAll({
        where: {
          postId: +postId,
        },
      });

      let userLikes = resultLike.map((el) => {
        return el.dataValues;
      });

      let onePost = await post.findOne({
        where: { id: +postId },
        include: [
          {
            model: user,
            attributes: ["id", "username", "image"],
          },
          {
            model: comment,
            include: [
              {
                model: user,
                attributes: ["username", "image"],
              },
            ],
          },
        ],
      });
      let users = await user.findAll();
      let oneUser = await user.findByPk(id);

      // res.json(onePost);
      res.render("comments.ejs", {
        post: onePost,
        users,
        user: oneUser,
        likes: userLikes,
      });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = PostController;
