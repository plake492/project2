module.exports = function(sequelize, DataTypes) {
  var ProjectTwo = sequelize.define("Project", {
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 100]
      }
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Project.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Project.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return ProjectTwo;
};
