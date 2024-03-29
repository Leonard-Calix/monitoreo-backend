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

    await queryInterface.bulkInsert('Departments',
      [
        {
          "nameD": "Tegucigalpa",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Atlantida",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Cortes",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Olancho",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Yoro",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
