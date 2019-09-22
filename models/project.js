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

  postProject.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    postProject.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return postProject;
};
