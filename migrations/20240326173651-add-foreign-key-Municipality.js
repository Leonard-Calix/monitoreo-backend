'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all(
        [
          queryInterface.addColumn('Municipalities', 'departmentId', {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Departments',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t })
        ]
      );
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all(
        [
          queryInterface.removeColumn('Municipalities', 'departmentId', { transaction: t }),
        ]
      );
    });
  }
};
