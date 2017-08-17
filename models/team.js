'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING, // should be Sequelize.STRING? http://docs.sequelizejs.com/manual/installation/getting-started.html
    abbreviation: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Team.hasMany(models.Transaction);
      }
    }
  });
  return Team;
};
