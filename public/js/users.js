//-------------------------------------------------------
//---------------Contact Page ---------------------
//------------------------------------------------------

//contact modal
$('.action-button').on('click', function () {
    
    const email = $('#form_email').val();
    const message = $('#form_message').val();

    if (email !== '' &&  message !== '') {
        $('#contactModal').modal('toggle');
        $('#emailDiv').empty();
        $('#messageDiv').empty();
        $('#form_email').val('');
        $('#form_message').val('');
        $('#form_name').val('');
        $('#form_lastname').val('');

    }
    else {
        $('#emailDiv').append('Please enter email!').css({ "color": "red", "font-size": "100%" });
        $('#messageDiv').append('Please enter message!').css({ "color": "red", "font-size": "100%" });

    }
    
});




//-------------------------------------------------------
//---------------User Page ---------------------
//------------------------------------------------------

//clicking to go back to the browse page
$('#backBrowse').on('click', function () {
    location.href = '/search';
})


//logging out the user
    $('.logout').on('click', function () {

        location.href = "/logout";
       
    })


//routing back to the homepage on clicking cancel
$('#cancel').on('click', function () {
        location.href = "/";
    });




//-------------------------------------------------------
//---------------Admin Page ---------------------
//------------------------------------------------------


/// admin login 
const adminLogin = function () {


    const adminName = $('.adminName').val();
    const adminPW = $('.adminPW').val();

    if (adminName === "admin" && adminPW === "password") {

        location.href = "/admin";

    }

    else {

        $('#adminErr').append('Access denied').css({ "color": "red", "font-size": "100%" });
    }
}

$('.adminSubmit').on('click', adminLogin);



//adding new pet 
$('.newpetSubmit').on('click', function (event) {

    event.preventDefault();

    output = $('.addPet');

    const newPet = {
        pet_name: $(`.newName`).val().trim(),
        pet_type: $(`.newType`).val().trim(),
        pet_breed: $(`.newBreed`).val().trim(),
        kennel_number: $(`.newKennel`).val().trim(),
        kennel_status: $(`.newStatus`).val().trim()
    };


    for (let key in newPet) {
        if (newPet[key] === '') {
            alert('Please fill out all fields');
            return;
        }
    }


    console.log('add awau');

    $.post('/api/pets', newPet, function (data) {

        if (data.success) {

            console.log("data", data);
        }

        else {
            alert('there was a problem, try again');
        }
    })

    

});



   









const petsForAdmin = function () {

    $.ajax({ url: '/api/pets/', method: 'GET' }).then(function (petList) {

        renderPetsName(petList);


    })
}

const renderPetsName = function (datalist) {

    let rowsToAdd = [];

    for (let i = 0; i < datalist.length; i++) {
        rowsToAdd.push(createPetRow(datalist[i]));
    }

    $('#adminContent').append(rowsToAdd);
    $('#petSubmit').on('click', findOneProduct);

}

const createPetRow = function (pet) {
    let listOption = $('<option>');
    listOption.attr('value', pet.id);
    listOption.text(pet.pet_name);
    return listOption;
}


const findOneProduct = function () {

    const id = $('#adminContent').val();

    $.ajax({ url: `/api/pets/${id}`, method: 'GET' }).then(function (data) {


        console.log(data);
        renderThisPetsInfo(data);


    });

}

const deleteThisPet = function () {

    const id = $(this).attr('data-id');
    console.log(id);


    let decide = confirm('Are you sure?');


    if (decide) {

        $.ajax({ url: `/api/pets/${id}`, method: 'DELETE' }).then(function (data) {

            if (data.success) {
                console.log('RIP in peperonises');
            }
            else {
                alert('error mi doggi');
            }
        })

    }

    else {
        console.log('that was close!');
    }


}


const renderThisPetsInfo = function (data) {

    const output = $("#thisPetInfo");

    const divBody = $('<li>').addClass('list-group-item mt-4').attr('id', data.id);;

    divBody.append(

        $('<h2>').text('Name: ' + data.pet_name),
        $('<h3>').text('Type: ' + data.pet_type),
        $('<h3>').text('Breed: ' + data.pet_breed),
        $('<h3>').text('Kennel#: ' + data.kennel_number),
        $('<h3>').text('Status: ' + data.kennel_status)


    )


    const buttonsDiv = $('<div>').addClass('float-right');

    buttonsDiv.append(
        $('<button >')
            .text('Edit')
            .addClass('btn btn-primary edit editme')
            .attr('data-id', data.id),
        $('<button>')
            .text('Delete')
            .addClass('btn btn-danger delete deleteme')
            .attr('data-id', data.id)
    );

    output.append(divBody, buttonsDiv);

    $('.editme').on('click', renderUpdateFields);
    $('.deleteme').on('click', deleteThisPet);

}


const renderUpdateFields = function () {

    const output = $("#thisPetInfo");

    const id = $(this).attr('data-id');
    console.log(id);


    listItem = [
        $('<h2>').text('Name: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `pet-name-${id}`),
        $('<h2>').text('Type: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `pet-type-${id}`),
        $('<h2>').text('Breed: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `pet-breed-${id}`),
        $('<h2>').text('Kennel #: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `kennel-number-${id}`),
        $('<h2>').text('Status: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `kennel-status-${id}`),
        $('<button>')
            .text('Submit')
            .addClass('btn btn-primary submit float-right')
            .attr('id', `submit-${id}`),
        $('<button>')
            .text('Cancel')
            .addClass('btn cancel float-right')
            .attr('id', `cancel-${id}`)
    ];

    output.append(listItem);

    const old = $(`#${id}`).html();

    $(`#cancel-${id}`).on('click', function () {
        console.log('cancel meee')
        $(`#${id}`).empty().append(old);
        $(`#edit-${id}`).off('click');
    });

    $(`#submit-${id}`).on('click', function () {
        petUpdates(id);
    });

}


function petUpdates(id) {

    const newPet = {
        pet_name: $(`#pet-name-${id}`).val().trim(),
        pet_type: $(`#pet-type-${id}`).val().trim(),
        pet_breed: $(`#pet-breed-${id}`).val().trim(),
        kennel_number: $(`#kennel-number-${id}`).val().trim(),
        kennel_status: $(`#kennel-status-${id}`).val().trim()
    }

    //making PUT request

    $.ajax({ url: `/api/pets/${id}`, method: 'PUT', data: newPet }).then(function (data) {

        if (data.success) {
            console.log('it worked!!!');
        } else {
            alert('noooooope');
        }
    })
}


petsForAdmin();