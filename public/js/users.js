//-------------------------------------------------------
//---------------Contact Page ---------------------
//------------------------------------------------------

//contact modal
$('.action-button').on('click', function () {

    const email = $('#form_email').val();
    const message = $('#form_message').val();

    if (email !== '' && message !== '') {
        $('#contactModal').modal('toggle');
        $('#emailDiv').empty();
        $('#messageDiv').empty();
        $('#form_email').val('');
        $('#form_message').val('');
        $('#form_name').val('');
        $('#form_lastname').val('');

    }
    else {
        $('#emailDiv').text('Please enter email!').css({ "color": "red", "font-size": "100%" });
        $('#messageDiv').text('Please enter message!').css({ "color": "red", "font-size": "100%" });

    }

});




//-------------------------------------------------------
//---------------User Page ---------------------
//------------------------------------------------------


//canceling out of signin page
$('.signinCancel').on('click', function() {
    location.href = "/";
});


//clicking to go back to the browse page
$('#backBrowse').on('click', function () {
    location.href = '/search';
})


//logging out the user
$('.logout').on('click', function () {

    location.href = "/logout";

})


//routing back to the homepage on clicking cancel
$('#adminancel').on('click', function () {
    location.href = "/";
});



// cancel request

const cancelRequest = function() {

    $('#reqContent').text('');
}


//confirming pet request from the user 

const requestPetInfo = function ()   {

    alert('Request submitted!');

    //clearing out the field once completed
    $('#reqContent').text('');

    const id = $(this).attr('data-id');
  
  
    addToInquiries(id);
}


const addToInquiries = function(id) {

   
    const inquiries = [];
    console.log(id);

    $.get(`/api/pets/${id}`, function(data) {
        console.log(data);
        inquiries.push(data);
        console.log(inquiries);

        inquiriesToTable(data);
    })

  

};

//adding user inquiries to the table
const inquiriesToTable = function(data) {

    const d = new Date();
    date = d.toDateString();
    console.log(date);


    const inquiries = $('#inquiries');

    const tableItems = $('<tr>').attr('id', data.id);

    tableItems.append(
        $('<td>').text(data.pet_name),
        // $('<td>').text(data.pet_type),
        // $('<td>').text(data.pet_breed),
        $('<td>').text(data.kennel_number),
        $('<td>').text(date),
        $('<td>').text('None required at this point' )

    )

    inquiries.append(tableItems);


    
}




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



$('.refresh').on('click', function() {
    location.href = "/admin";
})

// cancelling the add request
$('.cancelAdd').on('click', function () {
    location.href = "/admin";
})


//cancelling the edit request
$('.cancelEdit').on('click', function() {
   $('#currentInfo').text('');
})


//adding new pet 
$('.newpetSubmit').on('click', function (event) {


    $('#addError').empty();


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
            $('#addError').text('Please fill out all fields').css({ "color": "red", "font-size": "100%" });
            return;
        }
    }



    //POST request to add new pet
    $.post('/api/pets', newPet, function (data) {

        if (data.success) {

            $('.newName').val('');
            $('.newType').val('');
            $('.newBreed').val('');
            $('.newKennel').val('');
            $('.newStatus').val('');
            alert('Pet added successfully!');



        }

        else {
            alert('there was a problem, try again');
        }
    })


});






//Get request for pets
const petsForAdmin = function () {

    $.ajax({ url: '/api/pets/', method: 'GET' }).then(function (petList) {

        renderPetsName(petList);


    })
}

//rendering the pet names in the dropdown
const renderPetsName = function (datalist) {

    let rowsToAdd = [];

    for (let i = 0; i < datalist.length; i++) {
        rowsToAdd.push(createPetRow(datalist[i]));
    }

    $('#adminContent').append(rowsToAdd);
    $('#petSubmit').on('click', findOneProduct);
    $('#confirmReq').on('click', findOneProduct);


}

const createPetRow = function (pet) {
    let listOption = $('<option>');
    listOption.attr('value', pet.id);
    listOption.text(pet.pet_name);
    return listOption;
}


//finding info of the pet user selected
const findOneProduct = function () {

    const id = $('#adminContent').val();

    $.ajax({ url: `/api/pets/${id}`, method: 'GET' }).then(function (data) {


        console.log(data);
        renderThisPetsInfo(data);


    });

}


// deleting the pet from the database
const deleteThisPet = function () {

    const id = $(this).attr('data-id');
    console.log(id);


    let decide = confirm('Are you sure?');


    if (decide) {

        $.ajax({ url: `/api/pets/${id}`, method: 'DELETE' }).then(function (data) {

            if (data.success) {
                alert('Pet has been deleted');
                $('#currentInfo').text('');
                $('#updateInfo').text('');
            }
            else {
                alert('there was an error');
            }
        })

    }

    else {
        console.log('Action cancelled.');
    }


}



//rendering pet info to the html
const renderThisPetsInfo = function (data) {
    const useroutput = $('#reqContent');
    const output = $("#currentInfo");

    //creating body to send to admin page
    const divBody = $('<li>').addClass('list-group-item mt-4').attr('id', data.id);

    divBody.append(

        $('<p>').text('Name: ' + data.pet_name),
        $('<p>').text('Type: ' + data.pet_type),
        $('<p>').text('Breed: ' + data.pet_breed),
        $('<p>').text('Kennel#: ' + data.kennel_number),
        $('<p>').text('Status: ' + data.kennel_status),
        $('<button >')
            .text('Edit')
            .addClass('btn btnColor editme')
            .attr('data-id', data.id),
        $('<button>')
            .text('Delete')
            .addClass('btn btn-danger action-button deleteme')
            .attr('data-id', data.id)

    )


    

    //creating body to send to user page
    const reqBodyContent =  $('<li>').addClass('list-group-item mt-4  curr').attr('id', data.id);

    reqBodyContent.append(

        $('<img>').attr('src', data.pet_image).addClass('requestPet'),
        $('<p>').text('Name: ' + data.pet_name),
        $('<p>').text('Type: ' + data.pet_type),
        $('<p>').text('Breed: ' + data.pet_breed),
        $('<p>').text('Kennel#: ' + data.kennel_number),
        $('<p>').text('Status: ' + data.kennel_status),
        $('<button >')
            .text('Confirm Request')
            .addClass('btn btnColor requestButton')
            .attr('data-id', data.id),
        $('<button>')
            .text('Cancel')
            .addClass('btn btn-danger action-button cancelButton')
 

    )



   //sending to admin page
    output.html(divBody);
    //sending to user page
    useroutput.html(reqBodyContent);

    //buttons for admin    
    $('.editme').on('click', renderUpdateFields);
    $('.deleteme').on('click', deleteThisPet);


    //buttons for user
    $('.requestButton').on('click', requestPetInfo);
    $('.cancelButton').on('click', cancelRequest);
}


//rendering fields for the admin to enter the information to update
const renderUpdateFields = function () {

    const output = $("#updateInfo");

    const id = $(this).attr('data-id');
    console.log(id);

    const divBody = $('<li>').addClass('list-group-item mt-4 curr');

    listItem = [
        $('<h4>').text('Name: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `pet-name-${id}`),
        $('<h4>').text('Type: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `pet-type-${id}`),
        $('<h4>').text('Breed: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `pet-breed-${id}`),
        $('<h4>').text('Kennel #: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `kennel-number-${id}`),
        $('<h4>').text('Status: '),
        $('<input>')
            .addClass('form-control')
            .attr('type', 'text')
            .attr('id', `kennel-status-${id}`), $('<br>'),
        $('<button>')
            .text('Submit')
            .addClass('btn btnColor submit float-right')
            .attr('id', `submit-${id}`),
        $('<button>')
            .text('Cancel')
            .addClass('btn btn-danger action-button cancel float-right')
            .attr('id', `cancel-${id}`), $(`<br><br>`),
        $('<div>').attr('id', 'updateError')
    ];

    divBody.append(listItem);
    output.html(divBody);


    const old = $(`#${id}`).html();

    $(`#cancel-${id}`).on('click', function () {

        $('#updateInfo').text('');
        $('#currentInfo').text('');
        
        $(`#${id}`).empty().append(old);
        $(`#edit-${id}`).off('click');
    });

    $(`#submit-${id}`).on('click', function () {
        $('#updateError').empty();

        petUpdates(id);
    });

}

//sending the update to the database
function petUpdates(id) {

    const newPet = {
        pet_name: $(`#pet-name-${id}`).val().trim(),
        pet_type: $(`#pet-type-${id}`).val().trim(),
        pet_breed: $(`#pet-breed-${id}`).val().trim(),
        kennel_number: $(`#kennel-number-${id}`).val().trim(),
        kennel_status: $(`#kennel-status-${id}`).val().trim()
    }

    for (let key in newPet) {
        if (newPet[key] === '') {

            $('#updateError').text('Plase fill all fields!').css({ "color": "red", "font-size": "100%" });
            return;
        }
    }

    //making PUT request

    $.ajax({ url: `/api/pets/${id}`, method: 'PUT', data: newPet }).then(function (data) {

        if (data.success) {
            $('#currentInfo').text('');
            $('#updateInfo').text('');
            $(`#pet-name-${id}`).val('');
            $(`#pet-type-${id}`).val('');
            $(`#pet-breed-${id}`).val('');
            $(`#kennel-number-${id}`).val('');
            $(`#kennel-status-${id}`).val('');
            alert('Update Successful!');
        } else {
            alert('Error Occured, Try Again.');
        }
    })
}


petsForAdmin();