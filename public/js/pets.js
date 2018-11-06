
//get pets information
const findPets = function () {

    $.ajax({ url: `/api/pets`, method: 'GET' })
        .then(function (data) {

            renderPets('#petContent', data);
           
           $('#petJumbotron').hide();
        });
}


//function to render all pets in the container
const renderPets = function (outputElement, data) {


    for (let i = 0; i < data.length; i++){

            
        const output = $(outputElement);


        const listItems = $(`<li class='list-group-item mt-4 pet' data-id ='${data[i].id} '  >`);


        listItems.append(
           imageHolder = $(`<a href = ''><img class= 'bob'  src = "${data[i].pet_image}"></a>`),
         
            $("<br><h3>").text(data[i].pet_name),
            $('<p>').text( data[i].pet_breed),
            //$(`<button class = 'petButton' data-id=${data[i].id}>`).text('More Info'),

        )

        output.append(listItems);

    }


}


//function to target id's for each pet and display their info
$("#petContent").on("click",".pet",function(event){
    $('#petJumbotron').show();
    event.preventDefault();
    let id = $(this).data("id");
    
    $.ajax({
        url:"/api/pets/" + id,
        method:"GET"
    }).then(function(response){
        console.log(response);
        $("#petContent").hide();
        $("#filter").hide();
        renderPetInfo('#petInfo', response);
        renderPetImage('#petImage', response);
     
    })
})


//function to display the pet information
const renderPetInfo = function(outputElement, data) {

    const output = $(outputElement);

    const listItems = $('<div>');

    listItems.append(
        $('<p>').text(data.pet_name),
        $('<p>').text('Type: ' + data.pet_type),
        $('<p>').text('Breed: ' + data.pet_breed),
        $('<p>').text('Kennel#: ' + data.kennel_number)
    )
   
     const buttonDiv = $('<br><div>');   

     buttonDiv.append(
        $('<button>').text('Back').addClass('btn action-button btn-danger back '), $('<button>').text('Request more info').addClass('btn btnColor btnRequest')
     );

     output.append(listItems, buttonDiv);

     $('.back').on('click', goBack);

     $('.btnRequest').on('click', requestInfo);
}


//function to display pet images
const renderPetImage = function(outputElement, data) {

    const output  = $(outputElement);

    const  imageHolder = $(`<img src = "${data.pet_image}">`);

    output.append(imageHolder);
}


const goBack = function () {

   $('.back').attr('click', function(){
        location.href =  "/search";
   });
}


//running the function to display all pets 
findPets();


//filter function
$('#breed').on('keyup', function () {
    let value = $(this).val().toLowerCase();
    $('#petContent li').filter(function () {

        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })

})



const requestInfo = function() {

    location.href = '/signin';
    
}


