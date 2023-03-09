//long code to add table rows with uniqe data. (probably an easier way but I did this)

var table = document.getElementById("personalTable").getElementsByTagName("tbody")[0];

var row = table.insertRow(0);
var id = row.insertCell(0);
var icon = row.insertCell(1);
var description = row.insertCell(2);
var info = row.insertCell(3);
var image = row.insertCell(4);
id.innerHTML = "Study";
icon.innerHTML = "<i class='bi bi-balloon'></i>";
description.innerHTML = "I want to study";
info.innerHTML = "I want to study backend to get a better work, and it turns out I like it";
image.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Balloons-aj.svg/1200px-Balloons-aj.svg.png' width='100' height='80' alt='Ballons'>";

var row = table.insertRow(0);
var id = row.insertCell(0);
var icon = row.insertCell(1);
var description = row.insertCell(2);
var info = row.insertCell(3);
var image = row.insertCell(4);
id.innerHTML = "Gaming";
icon.innerHTML = "<i class='bi bi-apple'></i>";
description.innerHTML = "I like to play games";
info.innerHTML = "I only play when I have time for it";
image.innerHTML = "<img src='https://shared.cdn.smp.schibsted.com/v2/images/2cf3946c-0ee9-4d57-b5af-db33666b076f?fit=crop&format=auto&h=699&w=1209&s=3c87e70004333e6b837f2414f65710248e9e8c0f' width='100' height='80' alt='Apple colored'>";

var row = table.insertRow(0);
var id = row.insertCell(0);
var icon = row.insertCell(1);
var description = row.insertCell(2);
var info = row.insertCell(3);
var image = row.insertCell(4);
id.innerHTML = "Work";
icon.innerHTML = "<i class='bi bi-android'></i>";
description.innerHTML = "I work at a store";
info.innerHTML = "I used to be a store manager";
image.innerHTML = "<img src='https://play-lh.googleusercontent.com/y_-anVKl3ID25Je02J1dseqlAm41N8pwI-Gad7aDxPIPss3d7hUYF8c08SNCtwSPW5g' width='100' height='80' alt='Android'>";

var row = table.insertRow(0);
var id = row.insertCell(0);
var icon = row.insertCell(1);
var description = row.insertCell(2);
var info = row.insertCell(3);
var image = row.insertCell(4);
id.innerHTML = "Wife";
icon.innerHTML = "<i class='bi bi-alarm'></i>";
description.innerHTML = "I have a wife";
info.innerHTML = "She is beautiful and we all love her";
image.innerHTML = "<img src='https://img.fruugo.com/product/8/76/438034768_max.jpg' width='80' height='80' alt='Alarm clock'>";

var row = table.insertRow(0);
var id = row.insertCell(0);
var icon = row.insertCell(1);
var description = row.insertCell(2);
var info = row.insertCell(3);
var image = row.insertCell(4);
id.innerHTML = "Kids";
icon.innerHTML = "<i class='bi bi-airplane'></i>";
description.innerHTML = "I have 3 kids";
info.innerHTML = "Oldest is 6, middle is 4 and youngest is 2";
image.innerHTML = "<img src='https://www.rd.com/wp-content/uploads/2020/01/GettyImages-1131335393-e1650030686687.jpg' width='100' height='80' alt='Airplane'>";

//opens all the images inside this table in a new tab or window

$("table img").click(function(){
    open($(this).attr('src'));
});

//when hovering over odd row text color changed to green

$("document").ready(function() {
    $("table tr:odd").hover(function() {
        $(this).css("color", "green");
    }, function(){
        $(this).css("color", "black");
    }
    );
});
