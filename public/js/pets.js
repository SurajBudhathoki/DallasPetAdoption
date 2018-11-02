
//get pets information

const findPets = function () {

    $.ajax({ url: `/api/pets`, method: 'GET' })
        .then(function (data) {

            renderPets('#petContent', data);
            petInfo(data);
           
            // for (var {id: n} of data) {
            //    return n 
            // }
           
        });
}


const renderPets = function (outputElement, data) {



    for (let i = 0; i < data.length; i++){

            //console.log(data[i].id);

        const output = $(outputElement);


        const listItems = $(`<li class='list-group-item mt-4 pet '  >`);


        listItems.append(
           imageHolder = $(`<a href = /pet/${data[i].id} id ='${data[i].id}'><img class= 'bob'  src = "${data[i].pet_image}"></a> `),
           // $('<a>').text('click').attr('href','/pet'),
            $('<option >').text(data[i].id).addClass('tom'),
            $("<br><h3>").text(data[i].pet_name),
            $('<p>').text( data[i].pet_breed),
            $(`<button class = 'petButton' data-id=${data[i].id}>`).text('More Info'),



        )

        output.append(listItems);


        // petInfo=() => {
        //     data.forEach(element => {
        //         const ndata= element;
        //         console.log('foreach loop' + ndata);
        //         // return ndata;
               
        //     });
    
        function petInfo (){
            $('#petInfo').html(
                `<img src = "${data[i].pet_image}" height = "200px" data-id=${data[i].id}/>
            <p>${data[i].id}</p> 
             <p>${data[i].pet_breed}</p>
             <p>${data[i].kennel_number}</p> 
             <p>${data[i].kennel_status}</p> 
            `)

            $('#infoModal').modal('toggle');

        }
            // console.log(data[i]);
            // for (const i = 0; i < data.length; i++)
            // const id = $('option').val();
            // console.log('hello');

           
            
        


    }




    $('.petButton').on('click', petInfo);



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





