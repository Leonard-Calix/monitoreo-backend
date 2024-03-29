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
          queryInterface.addColumn('Polls', 'userId', {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t }),

          queryInterface.addColumn('Polls', 'questionId', {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: 'Questions',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t }),

          queryInterface.addColumn('Polls', 'communityId', {
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
          queryInterface.removeColumn('Polls', 'questionId', { transaction: t }),
          queryInterface.removeColumn('Polls', 'communityId', { transaction: t }),
          queryInterface.removeColumn('Polls', 'userId', { transaction: t }),
        ]
      );
    });
  }
};
