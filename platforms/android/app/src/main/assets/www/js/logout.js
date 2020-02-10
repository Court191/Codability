// When logout button is clicked
var signout = $("#logout");
$("#logout").click(function() {
            $.ajax({
                url: 'http://ll16clc.leedsnewmedia.net/Codability/www/php/logout.php',
                success: function(data) {
                    window.location.href = "login.html";
                    document.getElementById("logout").innerHTML = "You have logged out";
                }
            });
        });