// Replaces about me text

$("document").ready(function() {
    $("#about p:first").replaceWith("<p>I am 38 years old</p>");
    $("#about p:last").replaceWith("<p>I work hard and like to get things perfect</p>");
    $("#personal h2:first").replaceWith("<h2>I am a proud father of 3 kids</h2>");
    $("#personal p:first").replaceWith("<p>2 of my kids have autism, and I am very proud of all of my kids</p>");
    $(".aboutme").text($(".aboutme").text().replace("| student name |","David Hansen"));
    
// Changes background color and color on click

    $("#about p").click(function() {
        $(this).css("backgroundColor", "powderblue").css("color", "white");
    });
    $("#personal h2").click(function() {
        $(this).css("backgroundColor", "powderblue").css("color", "white");
    });
    $("#personal p").click(function() {
        $(this).css("backgroundColor", "powderblue").css("color", "white");
    });
    $(".aboutme").click(function() {
        $(this).css("backgroundColor", "powderblue").css("color", "white");
    });
});
