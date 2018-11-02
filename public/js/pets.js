
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
     
        
        const listItems =  $(`<li id =  ${data[i].id} class='list-group-item mt-4 pet'  >`);

       
        listItems.append(
            imageHolder = $(`<a href = "/pet" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `),

            $("<br><h3>").text(data[i].pet_name),
            $('<p>').text('Kennel#: ' + data[i].kennel_number),
            $(`<button class = 'but'>`).text('More Info'),

            
            
        )
       
        output.append(listItems);


       function petInfo(listItems) {


        $('#petInfo').html(
            `<img src = "${data[i].pet_image}" height = "200px"/>
            <p>${data[i].pet_name}</p> 
             <p>${data[i].pet_breed}</p>
             <p>${data[i].kennel_number}</p> 
             <p>${data[i].kennel_status}</p> 
            `)

        $('#infoModal').modal('toggle');
    }
       

    }

    


    //$('.bob').on('click', petInfo);
       
   $('.but').on('click', petInfo);
    
    

}




const getPetInfo = function(petId) {
    $.get(`api/pets/${petId}`, function(data) {
        
        console.log(data);
    })

}




findPets();




//filter function
$('#breed').on('keyup', function() {
    let value = $(this).val().toLowerCase();
    $('#petContent li').filter(function() {
        
        $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
    })

})





