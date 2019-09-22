module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 1,
      max: 100
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 300]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    peopleNeeded: {
      type: DataTypes.STRING,
      allowNul: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 300]
      }
    }
  });
  return Project;
};
