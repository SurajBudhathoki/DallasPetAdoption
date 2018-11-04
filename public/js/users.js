
//signing up users and adding them in the database


$('.signup').on('click', function (event) {

    event.preventDefault();

    const newUser = {
        first_name: $('#fName').val().trim(),
        last_name: $('#lName').val().trim(),
        email: $('#email').val().trim(),
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

   

    $.ajax({ url: `/api/users/`, method: 'GET' }).then(function (data) {


        checkLogin(data);


    })







    const email = $('.email').val();
    if(email === '') {
        $('#log').text('Please enter email AND password!').css({ "color": "red", "font-size": "100%" });
    }

}



const checkLogin = function (data) {

    const email = $('.email').val();

    let eList = [];

   

    for (let i = 0; i < data.length; i++) {

        eList.push(data[i].email);

    }
  


    if (eList.includes(email)) {
        
        $('#log').empty();

        
        sessionStorage.userEmail = email;
    
        $('.loginButton').attr('click', function(){
           
            location.href =  "/user";
            
            console.log(eList);
            console.log(data);
            
            
            
       });
    }
    else {
        $('#log').text('Wrong email/password');
    }

   
        
    

    //userRender();


    $('.email').val('');
    $('.pw').val('');
    $('#log').val('');
}


$('.loginButton').on('click', loginFunction);


//clearing out fields
$('.cancel').on('click', function(){
    $('.email').val('');
    $('.pw').val('');
    $('#log').empty();
    $('#fName').val('');
    $('#lName').val('');
    $('#email').val('');
    $('#password').val('');
    $('#err').empty();

});


// $('#navLogin').on('click', function(){
//     $('#navLogin').addClass('active');
//     $('#navSignup').removeClass('active');
  
// });


const userRender = function () {

    $('.test').text('buddy');
    console.log("hello world!");
    $.ajax({ url: `/api/users/1`, method: 'GET' })
        .then(function (data) {

            console.log(data);
           
           
        });
}



$('.btn-send').on('click', function(){
    $('#contactModal').toggle();
});






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


function doiT () {

    
    $('#test').append('Welcome ' +sessionStorage.userEmail);
    console.log(sessionStorage.userEmail);
}

doiT();