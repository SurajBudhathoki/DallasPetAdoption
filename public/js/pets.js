
//get pets information

const findPets = function() {

    $.ajax({ url: `/api/pets`, method: 'GET'})
    .then( function(data) {

        renderPets('#petContent', data);        
    });
}

const renderPets = function(outputElement, data) {

    console.log(data);

    for(let i = 0; i < data.length; i++) {

        const output =  $(outputElement);
     
        
        const listItems =  $("<li class='list-group-item mt-4 pet' >");
        listItems.append(
            imageHolder = $(`<img src = "${data[i].pet_image}">`),
            $("<h3 id ='name'>").text(data[i].pet_name),
            $('<p>').text('Kennel#: ' + data[i].kennel_number)
        )
       
        output.append(listItems);
    }
    
    
          
   
}

findPets();


$('#breed').on('keyup', function() {
    let value = $(this).val().toLowerCase();
    $('#petContent li').filter(function() {
        
        $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
    })

})