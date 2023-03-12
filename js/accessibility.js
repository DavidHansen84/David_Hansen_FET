// checkbox toggels big text on/ff

$(document).ready(function(){ 
$( "input" ).change(function() {
        var $input = $( this );
        if ( $input.is( ":checked" ) == true) {
            $("p").css("font-size", "120%");
           } else {
            $("p").css("font-size", "100%");
           }
      }).change();

});