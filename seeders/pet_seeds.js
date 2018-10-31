
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets', [{
        pet_name: 'Mason',
        pet_type: 'DOG',
        pet_breed: 'GERMAN SHEPHERD',
        kennel_number: 'LFD 072',
        kennel_status: 'Available'
    }, {
        pet_name: 'Deangelo',
        pet_type: 'DOG',
        pet_breed: 'ROTTWEILER',
        kennel_number: 'LFD 029',
        kennel_status: 'Impounded'
    }], {});
},
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets', null, {});
  }
};

