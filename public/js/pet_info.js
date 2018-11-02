
//call API for specific pet

const findPet = function () {


    const id = $('#bob').val();
    console.log(id);

    $.ajax({ url: `/api/pets/1`, method: 'GET' }).then(function (data) {
            
        renderPetInfo('#petInfo', data);
        renderPetImage('#petImage', data);

      
    });
}

const renderPetInfo = function(outputElement, data) {

    const output = $(outputElement);

   
  console.log(data);
    const listItems = $('<div>');

    listItems.append(
        $('<p>').text(data.pet_name),
        $('<p>').text('Type: ' + data.pet_type),
        $('<p>').text('Breed: ' + data.pet_breed),
        $('<p>').text('Kennel#: ' + data.kennel_number)
    )
   
    

     const buttonDiv = $('<br><div>');   

     buttonDiv.append(
        $('<button>').text('Get More Info').addClass('btn btn-success '), $('<button>').text('Adopt Now!').addClass('btn btn-success ')
     );


     output.append(listItems, buttonDiv);

}

const renderPetImage = function(outputElement, data) {

    const output  = $(outputElement);

    const  imageHolder = $(`<img src = "${data.pet_image}">`);

    output.append(imageHolder);
}

//findPet();


//$('.but').on('click', findPet);