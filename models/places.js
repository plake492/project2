module.exports = function(sequelize, DataTypes) {
    const Places = sequelize.define("Places", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      lat: {
        type: DataTypes.DECIMAL(10,5),
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      lng: {
        type: DataTypes.DECIMAL(10,5),
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      isHere: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
    return Places;
  };
  