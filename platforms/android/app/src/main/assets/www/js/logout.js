// When logout button is clicked
$(document).ready(function() {
var logout = $("#logout");
$("#logout").on('click', function (event) {
    event.preventDefault();
    
            $.ajax({
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/logout.php',
                success: function() {
                    // Clear Local Storage 
                    window.localStorage.clear();
                    
                    window.location.href = "login.html";
                }
            });
        return false;
    });
}); 