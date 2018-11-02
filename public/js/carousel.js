
const findPets = function() {

    $.ajax({ url: `/api/pets`, method: 'GET'})
    .then( function(data) {

        renderPetImage(data);
      
    });
}

//rendering the pet images in the carousel
const renderPetImage = function(data) {

    const slide1 = $('#slide1');
    const slide2 = $('#slide2');
    const slide3 = $('#slide3');

    for(let i = 0; i < 4; i++) {

      
        const listItems =  $(`<li class='list-group-item mt-4 pet'  >`);

       
        listItems.append(
            imageHolder = $(`<a href = "/pet" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `)
        )
       
        slide1.append(listItems);
    }

    for(let i = 5; i < 9; i++) {

      
        const listItems =  $(`<li class='list-group-item mt-4 pet'  >`);

       
        listItems.append(
            imageHolder = $(`<a href = "/pet" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `)
        )
       
        slide2.append(listItems);
    }


    for(let i = 10; i < 14; i++) {

      
        const listItems =  $(`<li class='list-group-item mt-4 pet'  >`);

       
        listItems.append(
            imageHolder = $(`<a href = "/pet" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `)
        )
       
        slide3.append(listItems);
    }


}

findPets();