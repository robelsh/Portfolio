$(document).ready(function(){

    $( "body" ).click(function( event ) {
        console.log(event.target.id);
        if(event.target.id == "telecombretagne"){
            alert("lol");
        }

    });

});


