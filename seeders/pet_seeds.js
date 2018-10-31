
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Pets', [{

            pet_name: 'Lucy',
            pet_type: 'DOG',
            pet_breed: 'CAROLINA DOG',
            kennel_number: 'LFD 009',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Luna',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'PCD 14',
            kennel_status: 'UNAVAILABLE'
        },

        {
            pet_name: 'Bella',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 093',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Lola',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 004',
            kennel_status: 'IMPOUNDED'
        },


        {
            pet_name: 'Daisy',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'LFD 107',
            kennel_status: 'UNAVAILABLE'
        },

        {
            pet_name: 'Boxer',
            pet_type: 'DOG',
            pet_breed: 'LABRADOR RETR',
            kennel_number: 'NMOMS 4',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Jasmine',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'PSD 12',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Lily',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'LFD 150',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Zuzu',
            pet_type: 'DOG',
            pet_breed: 'COLLIE SMOOTH',
            kennel_number: 'INJD 007',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Coco',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'AD 082',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Roxy',
            pet_type: 'CAT',
            pet_breed: 'DOMESTIC SH',
            kennel_number: 'LFC 025',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Gracie',
            pet_type: 'DOG',
            pet_breed: 'ANATOL SHEPHERD',
            kennel_number: 'LFD 068',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Penny',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 014',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Zoey',
            pet_type: 'DOG',
            pet_breed: 'LABRADOR RETR',
            kennel_number: 'INJD 024',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Bailey',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'PSD 44',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Mia',
            pet_type: 'CAT',
            pet_breed: 'DOMESTIC SH',
            kennel_number: 'LFC 009',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Dexter',
            pet_type: 'DOG',
            pet_breed: 'LABRADOR RETR',
            kennel_number: 'NMOMS 4',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Riley',
            pet_type: 'DOG',
            pet_breed: 'ANATOL SHEPHERD',
            kennel_number: 'LFD 068',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Dexter',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 020',
            kennel_status: 'IMPOUNDED'
        },

        {
            pet_name: 'Moose',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'AD 078',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Hank',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'PSD 11',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Loki',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'AD 080',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Bruno',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 148',
            kennel_status: 'AVAILABLE'
        },

        {
            pet_name: 'Centurion',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'AD 021',
            kennel_status: 'AVAILABLE'
        },
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Pets', null, {});
    }
};

