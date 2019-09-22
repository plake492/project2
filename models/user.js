module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
      
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
        		len: [1]
      		}
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5-18]
            }
        }
    });

    // Associate user to events 
    User.associate = function(models) {
      //When user is deleted, any information related with users is deleted
      User.hasMany(models.postProject, {
        onDelete: 'cascade'
      })
    }
    return User;
}
 