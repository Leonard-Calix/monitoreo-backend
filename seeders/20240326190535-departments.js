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
          "nameD": "Atlántida",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Choluteca",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Colón",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Comayagua",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Copán",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Cortés",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "El Paraíso.",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Francisco Morazán.",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Gracias a Dios",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Intibucá",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Islas de la Bahía",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "La Paz",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Lempira",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Ocotepeque",
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
          "nameD": "Santa Bárbara",
          "state": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "nameD": "Valle",
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
