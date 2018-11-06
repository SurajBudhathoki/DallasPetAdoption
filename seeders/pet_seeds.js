
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Pets', [{

            pet_name: 'Lucy',
            pet_type: 'DOG',
            pet_breed: 'CAROLINA DOG',
            kennel_number: 'LFD 009',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Lucy.jpg'
        },

        {
            pet_name: 'Luna',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'PCD 14',
            kennel_status: '"UNAVAILABLE"  }',
            pet_image: '/images/Luna.jpg'
        },

        {
            pet_name: 'Bella',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 093',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Bella.jpg'
        },

        {
            pet_name: 'Lola',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 004',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Lola.jpg'
        },


        {
            pet_name: 'Daisy',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'LFD 107',
            kennel_status: '"UNAVAILABLE"  }',
            pet_image: '/images/Daisy.jpg'
        },

        {
            pet_name: 'Boxer',
            pet_type: 'DOG',
            pet_breed: 'LABRADOR RETR',
            kennel_number: 'NMOMS 4',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Boxer.jpg'
        },

        {
            pet_name: 'Jasmine',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'PSD 12',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Jasmine.jpg'
        },

        {
            pet_name: 'Lily',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'LFD 150',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Lily.jpg'
        },

        {
            pet_name: 'Zuzu',
            pet_type: 'DOG',
            pet_breed: 'COLLIE SMOOTH',
            kennel_number: 'INJD 007',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Zuzu.jpg'
        },

        {
            pet_name: 'Coco',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'AD 082',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Coco.jpg'
        },

        {
            pet_name: 'Roxy',
            pet_type: 'CAT',
            pet_breed: 'DOMESTIC SH',
            kennel_number: 'LFC 025',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Roxy.jpg'
        },

        {
            pet_name: 'Gracie',
            pet_type: 'DOG',
            pet_breed: 'ANATOL SHEPHERD',
            kennel_number: 'LFD 068',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Gracie.jpg'
        },

        {
            pet_name: 'Penny',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 014',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Penny.jpg'
        },

        {
            pet_name: 'Zoey',
            pet_type: 'DOG',
            pet_breed: 'LABRADOR RETR',
            kennel_number: 'INJD 024',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Zoey.jpg'
        },

        {
            pet_name: 'Bailey',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'PSD 44',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Bailey.jpg'
        },

        {
            pet_name: 'Mia',
            pet_type: 'CAT',
            pet_breed: 'DOMESTIC SH',
            kennel_number: 'LFC 009',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Mia.jpg'
        },

        {
            pet_name: 'Draxler',
            pet_type: 'DOG',
            pet_breed: 'LABRADOR RETR',
            kennel_number: 'NMOMS 4',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Draxler.jpg'
        },

        {
            pet_name: 'Riley',
            pet_type: 'DOG',
            pet_breed: 'ANATOL SHEPHERD',
            kennel_number: 'LFD 068',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Riley.jpg'
        },

        {
            pet_name: 'Dexter',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 020',
            kennel_status: '"AVAILABLE"  }',
            pet_image: '/images/Dexter.jpg'
        },

        {
            pet_name: 'Moose',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'AD 078',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Moose.jpg'
        },

        {
            pet_name: 'Hank',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'PSD 11',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Hank.jpg'
        },

        {
            pet_name: 'Loki',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'AD 080',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Loki.jpg'
        },

        {
            pet_name: 'Bruno',
            pet_type: 'DOG',
            pet_breed: 'GERMAN SHEPHERD',
            kennel_number: 'LFD 148',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Bruno.jpg'
        },

        {
            pet_name: 'Centurion',
            pet_type: 'DOG',
            pet_breed: 'PIT BULL',
            kennel_number: 'AD 021',
            kennel_status: 'AVAILABLE',
            pet_image: '/images/Centurion.jpg'
        },





        {
            pet_name: "Jimmy",
            pet_type: "DOG",
            pet_breed: "ROTTWEILER",
            kennel_number: "PAWS 06",
            kennel_status: " AVAILABLE"
        },

        {
            pet_name: "Lanus",
            pet_type: "DOG",
            pet_breed: "GERM SHEPHERD",
            kennel_number: "LFD 078",
            kennel_status: "AVAILABLE"
        },
     
       
      
        {
          
            pet_name: "Ronnie",
            pet_type: "CAT",
            pet_breed: "DOMESTIC SH",
            kennel_number : "AC 023",
            kennel_status: "UNAVAILABLE"

        },
       
        {
            pet_name: "Chippy",
            pet_type: "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "INJD 010",
            kennel_status : "AVAILABLE"  
        },
       
        {
            pet_name: "Messi",
            pet_type: "DOG",
            pet_breed: "COLLIE SMOOTH",
            kennel_number : "LFD 071",
            kennel_status: "AVAILABLE"
        },
       
        {
            pet_name: "Topher",
            pet_type: "DOG",
            pet_breed: "BASSET HOUND",
            kennel_number : "PAWS 15",
            kennel_status: "AVAILABLE"
        },
       
        {
            pet_name: "Leroy",
            pet_type: "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "AD 041",
            kennel_status : "AVAILABLE"
        },

        {
            pet_name: "Drako",
            pet_type: "DOG",
            pet_breed: "GERM SHEPHERD",
            kennel_number: "LFD 113",
            kennel_status : "AVAILABLE",
        },
       
        {
            pet_name: "Fefe",
            pet_type: "DOG",
            pet_breed: "GERM SHEPHERD",
            kennel_number: "PAWS 04",
            kennel_status : "AVAILABLE"
        },    
        
        {
            pet_name: "Vecino",
            pet_type: "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "PCD 24",
            kennel_status : "AVAILABLE"
        },
       

        {
            pet_name: "Tommy",
            pet_type: "DOG",
            pet_breed: "ROTTWEILER",
            kennel_number: "LCP 06",
            kennel_status: " AVAILABLE"
        },

        {
            pet_name: "Limerio",
            pet_type: "DOG",
            pet_breed: "GERM SHEPHERD",
            kennel_number: "PAWS 078",
            kennel_status: "AVAILABLE"
        },
     
       
      
        {
            pet_name: "Chica",
            pet_type: "CAT",
            pet_breed: "DOMESTIC SH",
            kennel_number : "AC 023",
            kennel_status: "AVAILABLE"

        },
       
        {
            pet_name: "Max",
            pet_type: "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "IND 010",
            kennel_status : "AVAILABLE"  
        },
       
        {
            pet_name: "Ollie",
            pet_type: "DOG",
            pet_breed: "COLLIE SMOOTH",
            kennel_number : "LFD 071",
            kennel_status: "AVAILABLE"
        },
       
        {
            pet_name: "Popo",
            pet_type: "DOG",
            pet_breed: "BASSET HOUND",
            kennel_number : "PAWS 15",
            kennel_status: "AVAILABLE"
        },
       
        {
            pet_name: "Goku",
            pet_type: "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "AD 041",
            kennel_status : "AVAILABLE"
        },

        {
            pet_name: "Archie",
            pet_type: "DOG",
            pet_breed: "GERM SHEPHERD",
            kennel_number: "LFD 113",
            kennel_status : "AVAILABLE",
        },
       
        {
            pet_name: "Molly",
            pet_type: "DOG",
            pet_breed: "GERM SHEPHERD",
            kennel_number: "PAWS 04",
            kennel_status : "AVAILABLE"
        },    
        
        {
            pet_name: "Rosie",
            pet_type: "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "PCD 24",
            kennel_status : "AVAILABLE"
        },
        {
            pet_name: "Chappie",
            pet_type: "CAT",
            pet_breed: "DOMESTIC MH",
            kennel_number: "LFC 005",
            kennel_status: "AVAILABLE"
        },
        {
            pet_name: "Flado",
            pet_type: "BIRD",
            pet_breed: "CHICKEN",
            kennel_number: "PUPS 1",
            kennel_status : "UNAVAILABLE"  
        },
        {
            pet_name: "Teddy",
            pet_type : "WILDLIFE",
            pet_breed: "HAMSTER",
            kennel_number: "HABITAT",
            kennel_status: "AVAILABLE"
        },
        {
            pet_name: "Cheryshiv",
            pet_type: "CAT",
            pet_breed: "RUSSIAN BLUE",
            kennel_number : "AC 033",
            kennel_status: "AVAILABLE"
        },
        {
            pet_name: "Rocky",
            pet_type : "DOG",
            pet_breed: "BOXER",
            kennel_number: "QD 04",
            kennel_status: "AVAILABLE"
        },
        {
            pet_name: "Bubba",
            pet_type : "DOG",
            pet_breed: "BULLMASTIFF",
            kennel_number: "LFD 065",
            kennel_status: "AVAILABLE"
        },
        {
            pet_name: "Frankie",
            pet_type : "DOG",
            pet_breed: "LABRADOR RETR",
            kennel_number: "LFSD 03",
            kennel_status: "AVAILABLE"
        },

        {
            pet_name: "Maggie",
            pet_type : "DOG",
            pet_breed: " PIT BULL",
            kennel_number: "INJD 015",
            kennel_status: "AVAILABLE"
        },

        {
            pet_name: "Bailey",
            pet_type : "DOG",
            pet_breed: "LABRADOR RETR",
            kennel_number: "AD 007",
            kennel_status: "AVAILABLE"
        } 
        
       
    
       

        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Pets', null, {});
    }
};


