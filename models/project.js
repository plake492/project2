module.exports = function(sequelize, DataTypes) {
  var postProject = sequelize.define("Project", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.INTEGER,
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
  return postProject;
};
