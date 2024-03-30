'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('communities',
    [
      {
        "nameC": "Trojes",
        "state" : true,
        "updatedAt": "2024-03-26T22:40:28.477Z",
        "createdAt": "2024-03-26T22:40:28.477Z",
        "MunicipalityId": 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('communities', null, {});
  }
};
