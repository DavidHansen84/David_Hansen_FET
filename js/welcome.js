// a toast when clicked Like button

$(document).ready(function(){
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    });

// and I'm bored button to do a API get request and logs it to console

    $("#boredBtn").click(function(){
$.ajax ({
    url: 'https://www.boredapi.com/api/activity/',
    success: function(response) {
        console.log(response);
    }
    });
});
});