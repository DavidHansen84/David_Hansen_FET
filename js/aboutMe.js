var changeAboutMe  = document.getElementsByTagName("h2");

var change1 = changeAboutMe.getElementsByTagName("p");

function replace() {
    $("change1").replaceWith(replacement)
}
function replacement() {
    if ($(this).text().indexOf("first") != -1) {
        return "<p>The new first paragraph</p>";
    }
    else {
        return this.outerHTML;
    }
}