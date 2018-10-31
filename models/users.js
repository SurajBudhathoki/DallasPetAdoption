module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define('Users', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    Users.associate = function(models) {

    };

    return Users;

}