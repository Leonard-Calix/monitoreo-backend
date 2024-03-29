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
    await queryInterface.bulkInsert('Roles',
      [
        {
          "description": "Crear usuarios",
          "code": "0001",
          "active": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "description": "Eliminar usuarios",
          "code": "0002",
          "active": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "description": "Actualizar usuarios",
          "code": "0003",
          "active": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
        {
          "description": "Crear roles",
          "code": "0004",
          "active": true,
          "createdAt": new Date(),
          "updatedAt": new Date(),
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
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
