// clicking the button prompts the user to update info and logs it to console

$(document).ready(function(){
    $("#contactBtn").click(function(){

        var email = prompt("What is your E-mail?", "email@emailaddress.co.za"); {
            if (email.includes("@") && email.includes(".")) {
            } else {
                alert("Need the correct format with @ and .");
                return;
            }
        };
        console.log("From: " + email);

        var telephone_number = prompt("What is your phone number?", "0458754125"); {
            if (isNaN(telephone_number)){
                alert("Need to input a number");
                return;
            }  else if (telephone_number === "") {
                alert("You need to enter your phone number")
                return;
            } 
        console.log("Contact: " + telephone_number);

        var address = prompt("What is your address?", "12 Smith Road, John Park"); {
            if (address === "") {
                alert("You need to enter your address")
                return;
            } 
        }
        console.log("Address: " + address);
        
// Changes the text to the new input text

        $("#contact p.text-muted:first").replaceWith("<p>" + telephone_number + "</p>");
        $("#contact p.text-muted:last").replaceWith("<p>" + address + "</p>");
        $("#contact p.text-muted").replaceWith("<p>" + email + "</p>");
}
});

});