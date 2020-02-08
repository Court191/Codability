function toggleNav() {
    document.querySelector(".sidenav").classList.toggle("sidenav--open"); 
}

// When logout button is clicked
var signout = $("#logout");
$("#logout").click(function() {
            $.ajax({
                url: 'http://ll16clc.leedsnewmedia.net/Codability/www/php/logout.php',
                success: function(data) {
                    window.location.href = "index.html";
                    document.getElementById("logout").innerHTML = "You have logged out";
                }
            });
        });