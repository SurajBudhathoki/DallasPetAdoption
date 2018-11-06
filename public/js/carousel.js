
//making GET request to get pets
const findPets = function () {

    $.ajax({ url: `/api/pets`, method: 'GET' })
        .then(function (data) {

            renderPetImage(data);

        });
}

//rendering the pet images in the carousel
const renderPetImage = function (data) {

    const slide1 = $('#slide1');
    const slide2 = $('#slide2');
    const slide3 = $('#slide3');

    for (let i = 0; i < 5; i++) {


        const listItems = $(`<li class=' pet'  >`);


        listItems.append(
            imageHolder = $(`<a href = "/search" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `)
        )

        slide1.append(listItems);
    }

    for (let i = 5; i < 10; i++) {


        const listItems = $(`<li class=' pet'  >`);


        listItems.append(
            imageHolder = $(`<a href = "/search" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `)
        )

        slide2.append(listItems);
    }


    for (let i = 10; i < 15; i++) {


        const listItems = $(`<li class='pet'  >`);


        listItems.append(
            imageHolder = $(`<a href = "/search" class= 'bob' id ='bob'><img src = "${data[i].pet_image}"></a> `)
        )

        slide3.append(listItems);
    }


}

//running the function
findPets();