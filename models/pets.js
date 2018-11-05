module.exports = function(sequelize, DataTypes) {
    const Pets = sequelize.define('Pets', {
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kennel_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kennel_status: {
            type: DataTypes.STRING,
        },
        pet_image: {
            type: DataTypes.STRING
        },

    });

    Pets.associate = function(models) {
        Pets.belongsToMany(models.User, {
            through: 'userPets',
            foreignKey: 'petId',
            onDelete: 'cascade'
    
        })
    };

    return Pets;

}