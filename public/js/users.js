
//signing up users and adding them in the database
$( function(){

$('.signup').on('click', function(event) {

    event.preventDefault();

    const newUser = {
        first_name : $('#fName').val().trim(),
        last_name : $('#lName').val().trim(),
        email: $('#email').val().trim(),
        password: $('#password').val().trim()
    };
    
    for(let key in newUser) {
        if(newUser[key] === '') {
            alert('please fill all fields');
            return;
        }
    }
    
    console.log(newUser);


    $.post('/api/users', newUser,
      function(data) {

        if(data.success) {
            
            console.log('data', data)
            alert('Thank you for signing up!');


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

$('.login').on('click', function(event) {

    event.preventDefault();

   
    const email = $('.email').val();

    const id = $(this).attr('data-id');

    $.ajax({ url: `/api/users/`, method: 'GET' }).then(function(data) {

        
        // console.log(data);

        for(let i = 0; i < data.length; i++) {

            
            if(data[i].email === email) {
                alert('welcome back');
            }
           
        } 
        
    })

    $('.email').val('');
    $('.pw').val('');

})






});