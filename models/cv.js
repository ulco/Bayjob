'use strict';
module.exports = function(sequelize, DataTypes) {
  var CV = sequelize.define('CV', {
    titre: DataTypes.STRING,
    resume: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        CV.belongsTo(models.Candidat);
        CV.hasMany(models.Langue);
        CV.hasMany(models.Centre_interet);
        CV.hasMany(models.Experience_pro);
        CV.hasMany(models.Formation);
        CV.hasMany(models.Competence_CV);
      }
    }
  });
  return CV;
};