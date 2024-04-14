'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users',
      [
        {
          "active": true,
          "firstName": "Bryan Leonardo ",
          "lastName": "Calix",
          "userName": "blcalix",
          "email": "blcalix@gmail.com",
          "password": "$2a$10$PT1y9D9qZLcuHaLd6ieLR.CVG99.4ljEqdshg6Dwn/npdw5boGbfK",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z"
        },
        {
          "active": true,
          "firstName": "Cristian wilfredo",
          "lastName": "Pacheco",
          "userName": "cpacheco",
          "email": "cpacheco@gmail.com",
          "password": "$2a$10$PT1y9D9qZLcuHaLd6ieLR.CVG99.4ljEqdshg6Dwn/npdw5boGbfK",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
