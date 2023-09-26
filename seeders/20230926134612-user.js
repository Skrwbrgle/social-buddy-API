"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "john_doe",
          email: "john@example.com",
          password: "password123",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "jane_smith",
          email: "jane@example.com",
          password: "secret456",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "alice_johnson",
          email: "alice@example.com",
          password: "myp@ssw0rd",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bob_wilson",
          email: "bob@example.com",
          password: "secure789",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
