const { user, post, like, comment } = require("../models");
class UserController {
  static async getUsers(req, res) {
    try {
      const id = +req.query.id;

      // const result = await user.findAll({
      //   include: [post, comment],
      //   order: [["id", "asc"]],
      // });
      let oneUser = await user.findByPk(id);
      let profile = await user.findOne({
        where: { id: id },
      });

      let postsUser = await post.findAll({
        where: {
          userId: id,
        },
      });

      // res.json(postsUser);
      res.render("profile.ejs", { profile, user: oneUser, posts: postsUser });
    } catch (err) {
      res.json(err);
    }
  }

  static signUp(req, res) {
    res.render("signUp.ejs");
  }

  static signIn(req, res) {
    res.render("signIn.ejs");
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let login = await user.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      const id = +login.id;

      // console.logs(id);
      res.redirect(`/posts?id=${id}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async editProfile(req, res) {
    try {
      const id = +req.query.id;

      let oneUser = await user.findByPk(id);

      res.render("editProfile.ejs", { user: oneUser });
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { username, email, password } = req.body;

      let resultUser = await user.create({
        username,
        email,
        password,
      });

      let login = await user.findOne({
        where: {
          email: email,
          password: password,
        },
      });

      const id = +login.id;

      // res.json(login);
      res.redirect(`/posts?id=${id}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.query.id;
      // console.log(id);
      const { username, email, password, image } = req.body;
      const imageUrl = image === "" ? null : image;

      let resultUser = await user.update(
        {
          username,
          email,
          password,
          image: imageUrl,
        },
        { where: { id: id } }
      );
      resultUser
        ? res.redirect(`/users/profile?id=${id}`) //res.json({ message: `Successfully updatees!` })
        : res.json({ message: `User with ${id} can not update!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.query.id;
      let resultUser = await user.destroy({ where: { id } });
      let resultPost = await post.destroy({ where: { userId: id } });
      let resultComment = await comment.destroy({ where: { userId: id } });
      let resultLike = await like.destroy({ where: { userId: id } });

      resultUser === 1
        ? res.redirect(`/`) //res.json({ message: `Successfully deleted user with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
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

  static async deletePost(req, res) {
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
        ? res.redirect(`/users/profile?id=${id}`) //res.json({ message: `Successfully deleted post with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = UserController;
