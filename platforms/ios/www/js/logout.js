// When logout button is clicked
var logout = $("#logout");
$("#logout").click(function() {
            $.ajax({
                url: 'http://ll16clc.leedsnewmedia.net/Codability/www/php/logout.php',
                success: function() {
                    window.location.href = "login.html";
                    document.getElementById("logout").innerHTML = "You have successfully logged out";
                }
            });
        });