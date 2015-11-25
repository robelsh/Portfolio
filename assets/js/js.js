$(document).ready(function()
                  {
    $("#requiem").hide();
    $(".logo-logic").hide();
    $(".logo-autre-c").hide();


    $( "body" ).click(function( event ) {
        console.log(event.target.id);
        if(event.target.id == "langage"){
            if ($("#logiciel").hasClass("on")==true){
                $("#logiciel").removeClass("on");
                $(".logo-logic").hide();
            }

            if ($("#autre-c").hasClass("on")==true){
                $("#autre-c").removeClass("on");
                $(".logo-autre-c").hide();
            }

            if ($("#langage").hasClass("on")==false){
                $("#langage").addClass("on");
                $(".logo-lang").fadeIn();
            }
        }

        if(event.target.id == "autre-c"){
            if ($("#logiciel").hasClass("on")==true){
                $("#logiciel").removeClass("on");
                $(".logo-logic").hide();
            }

            if ($("#langage").hasClass("on")==true){
                $("#langage").removeClass("on");
                $(".logo-lang").hide();
            }

            if ($("#autre-c").hasClass("on")==false){
                $("#autre-c").addClass("on");
                $(".logo-autre-c").fadeIn();
            }


        }

        if(event.target.id == "logiciel"){
            if ($("#autre-c").hasClass("on")==true){
                $("#autre-c").removeClass("on");
                $(".logo-autre-c").hide();
            }

            if ($("#langage").hasClass("on")==true){
                $("#langage").removeClass("on");
                $(".logo-lang").hide();
            }


            if ($("#logiciel").hasClass("on")==false){
                $("#logiciel").addClass("on");
                $(".logo-logic").fadeIn();
            }

        }
    });

});


(function($){

    launch = function() {
        if($(".requiem").attr("id") == "requiem-active"){
            $(".requiem").slideUp();
            $(".requiem").attr("id","requiem");
        }

        else {
            $(".requiem").slideDown();
            $(".requiem").attr("id","requiem-active");
        }

    };




})(jQuery)


function menu (choix){
    if(choix == "langages"){

    }

}
