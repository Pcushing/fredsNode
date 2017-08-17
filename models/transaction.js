'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    transaction_at: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Transaction.belongsTo(models.Team, {
          foreignKey: 'teamId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Transaction;
};