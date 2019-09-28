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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 100]
      }
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
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
  return Project;
};
