const { user, post, like, comment } = require("../models");
class UserController {
  static async getUsers(req, res) {
    try {
      const result = await user.findAll({
        include: [post, comment],
        order: [["id", "asc"]],
      });

      res.json(result);
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

      res.json(resultUser);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { username, email, password, image } = req.body;
      let resultUser = await user.update(
        {
          username,
          email,
          password,
          image,
        },
        { where: { id } }
      );

      resultUser
        ? res.json({ message: `Successfully updatees!` })
        : res.json({ message: `User with ${id} can not update!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultUser = await user.destroy({ where: { id } });
      let resultPost = await post.destroy({ where: { userId: id } });
      let resultComment = await comment.destroy({ where: { userId: id } });
      let resultLike = await like.destroy({ where: { userId: id } });

      resultUser === 1
        ? res.json({ message: `Successfully deleted user with id ${id}` })
        : res.json({ message: `Can't found id ${id}` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = UserController;
