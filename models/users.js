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
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },


    });

    Users.associate = function(models) {
        Users.belongsToMany(models.Pets, {
            through: 'userPets',
            foreignKey:  'userId',
            onDelete: 'cascade'
            
        });
    };

    return Users;

}