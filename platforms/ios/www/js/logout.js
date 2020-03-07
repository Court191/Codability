// When logout button is clicked
var logout = $("#logout");
$("#logout").click(function signout() {
            $.ajax({
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/logout.php',
                success: function(data) {
                    // Clear Local Storage 
                    window.localStorage.clear();
                    
                    window.location.href = "login.html";
                    document.getElementById("logout").innerHTML = "You have successfully logged out";
                }
            });
        });