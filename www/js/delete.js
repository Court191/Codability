// When delete account button is clicked
var deleteaccount = $("#delete");
$("#delete").click(function() {
            $.ajax({
                url: 'http://ll16clc.leedsnewmedia.net/Codability/www/php/delete.php',
                success: function() {
                    window.location.href = "index.html";
                    document.getElementById("delete").innerHTML = "Account deleted";
                }
            });
        });