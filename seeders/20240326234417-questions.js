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

    await queryInterface.bulkInsert('Questions',
      [
        {
          "description": "¿La aldea tiene patronato organizado, legalizado y con personería jurídica?",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 0
        },
        {
          "description": "¿La aldea tiene junta de agua organizada, legalizada y con personería jurídica?",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 0
        },
        {
          "description": "¿La aldea tiene una caja de ahorro y crédito rural con personería jurídica, cuenta de bancos, reglamento de crédito y libros contables para registrar sus transacciones?",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 0
        },
        {
          "description": "¿Las cajas de ahorro y crédito rural han incrementado el número de miembros permitiendo el ingreso de pobres extremos?",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 0
        },
        {
          "description": "¿La Mesa Solidaria se ha capacitado en el manejo del Programa de la Red Solidaria?",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 0
        },
        {
          "description": "Los que integran la Mesa Solidaria saben cuál es su función. /n Explique brevemente la función de la Mesa",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 1
        },
        {
          "description": "Se han programado reuniones con las organizaciones de la aldea para proponer mejoras en su comunidad. '/n Mencione cuales son las propuestas que salieron de la reunión",
          "type": "S",
          "updatedAt": "2024-03-26T22:40:28.477Z",
          "createdAt": "2024-03-26T22:40:28.477Z",
          "state": 1,
          "recommendation" : 1
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
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
