// a toast when clicked Like button

$(document).ready(function(){
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    });

// and I'm bored button to do a API get request and logs it to console

    $("#boredBtn").click(function(){
        var request = new XMLHttpRequest();

request.open('GET', 'https://www.boredapi.com/api/activity/');

request.onload = function() {
   var response = request.response
   var parsedData = JSON.parse(response);
   console.log(parsedData);
}

request.send();
    });

});
