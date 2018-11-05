module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
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
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // last_login: {
        //     type: DataTypes.DATE
        // },
 
        // status: {
        //     type: DataTypes.ENUM('active', 'inactive'),
        //     defaultValue: 'active'
        // }

    });

    User.associate = function(models) {
        User.belongsToMany(models.Pets, {
            through: 'userPets',
            foreignKey:  'userId',
            onDelete: 'cascade'
            
        });
    };

    return User;

}