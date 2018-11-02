
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

}



const checkLogin = function (data) {

    const email = $('.email').val();

    let eList = [];

    for (let i = 0; i < data.length; i++) {

        eList.push(data[i].email);

    }

  


    if (eList.includes(email)) {
        
       // $('#log').text('Welcome back!');
        $('.login').on('click', "location.href ='/about'");
    }

   
        
    

    console.log(eList);


    $('.email').val('');
    $('.pw').val('');
    $('#log').val('');
}


$('.login').on('click', loginFunction);


$('.cancel').on('click', function(){
    $('.email').val('');
    $('.pw').val('');
    $('#log').empty();
    $('#fName').val('');
    $('#lName').val('');
    $('#email').val('');
    $('#password').val('');
    $('#err').empty();

})