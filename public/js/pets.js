
//get pets information

const findPets = function() {

    $.ajax({ url: `/api/pets`, method: 'GET'})
    .then( function(data) {

        renderPets('#petContent', data);        
    });
}

const renderPets = function(outputElement, data) {

   

    

    

    for(let i = 0; i < data.length; i++) {

        const output =  $(outputElement);
     
        const listItems =  $("<li class='list-group-item mt-4 pet' display='inline'>");
        listItems.append(
            $('<h3>').text(data[i].pet_name),
            $('<p>').text('Type: ' + data[i].pet_type),
            $('<p>').text('Breed: ' + data[i].pet_breed),
            $('<p>').text('Kennel#: ' + data[i].kennel_number)
        )
       
        output.append(listItems);
    }
    
            
   
}

findPets();