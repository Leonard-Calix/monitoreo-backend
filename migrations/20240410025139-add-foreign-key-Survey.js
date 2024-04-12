'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    return queryInterface.sequelize.transaction(t => {
      return Promise.all(
        [
          queryInterface.addColumn('Surveys', 'userId', {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t }),

          queryInterface.addColumn('Surveys', 'communityId', {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: 'Communities',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t })

        ]
      );
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.sequelize.transaction(t => {
      return Promise.all(
        [
          queryInterface.removeColumn('surveys', 'userId', { transaction: t }),
          queryInterface.removeColumn('surveys', 'communityId', { transaction: t }),
        ]
      );
    });
  }
};
