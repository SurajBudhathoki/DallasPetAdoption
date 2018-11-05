
//signing up users and adding them in the database


$('.signup').on('click', function (event) {

    event.preventDefault();

    const newUser = {
        first_name: $('#fName').val().trim(),
        last_name: $('#lName').val().trim(),
        email: $('#email').val().trim(),
        username: $('#username').val().trim(),
        password: $('#password').val().trim()
    };

    for (let key in newUser) {
        if (newUser[key] === '') {
            $('#err').text('Please fill all fields!').css({ "color": "red", "font-size": "100%" });
            return;
        }
    }

    console.log(newUser);


    $.post('/api/users', newUser,
        function (data) {

            if (data.success) {

                console.log('data', data)

                $('#userModal').append('Thank you for signing up!');


                $('#fName').val('');
                $('#lName').val('');
                $('#email').val('');
                $('#username').val('');
                $('#password').val('');
            }

            else {

                alert('sorry, try again!');
            }
        });



})



//logging in the user if they are in the database   




const loginFunction = function (event) {

    event.preventDefault();

    userRender();

    $.ajax({ url: `/api/users/`, method: 'GET' }).then(function (data) {


        checkLogin(data);


    })







    // const email = $('.email').val();
    // if(email === '') {
    //     $('#log').text('Please enter email AND password!').css({ "color": "red", "font-size": "100%" });
    // }

}



const checkLogin = function (data) {

    const username = $('.userName').val();

    let userList = [];



    for (let i = 0; i < data.length; i++) {

        userList.push(data[i].username);

    }



    if (userList.includes(username)) {

        $('#loginErr').empty();


        sessionStorage.userName = username;

        $('.loginButton').attr('click', function () {

            location.href = "/user";

            console.log(userList);
            console.log(data);



        });
    }
    else {
        $('#loginErr').text('Wrong username/password').css({ "color": "red", "font-size": "100%" });
    }





    //


    $('.email').val('');
    $('.pw').val('');
    $('#loginErr').val('');
}


$('.loginButton').on('click', loginFunction);


//clearing out fields
$('.cancel').on('click', function () {
    $('.email').val('');
    $('.pw').val('');
    $('#loginErr').empty();
    $('#fName').val('');
    $('#lName').val('');
    $('#email').val('');
    $('#password').val('');
    $('#err').empty();

});




const userRender = function () {



    let id = $(this).data("id");
    console.log(id);

    console.log("hello world!");
    $.ajax({ url: `/api/users/1`, method: 'GET' })
        .then(function (data) {

            console.log(data);


        });
}



$('.btn-send').on('click', function () {
    $('#contactModal').toggle();
});


$('#backBrowse').on('click', function () {
    location.href = '/search';
})



//-------------------------------------------------------
//---------------User Dashboard Page ---------------------


// const newUserInfo = {
//     first_name : data.first_name,
//     last_name : data.last_name,
//     email : data.email,
//     password : data.password
// }


// const updateUser  = function() {

//     $.ajax({ url: `/api/users/${id}`, method: 'PUT'}).then( function(data ) {

//         if(data.success) {

//             console.log('update successful');
//         }
//         else {
//             console.log('Oops, error!');
//         }
//     })
// }


function doiT() {




    const logout = $('<button>').text('Logout').addClass('logout');

    $('#welcomeUser').append(`Welcome  ${sessionStorage.userName}!`
    );

    $('#logout').append(logout);


    $('.logout').on('click', function () {

        location.href = "/";
        $('.actions').hide();

    })

    $('.actions').show();

}



//userRender();
doiT();






/// admin login 

const adminLogin = function () {


    const adminName = $('.adminName').val();
    const adminPW = $('.adminPW').val();

    if (adminName === "admin" && adminPW === "pass") {

        location.href = "/admin";

    }

    else {

        alert("Wrong ID");
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