// When delete account button is clicked
$(document).ready(function() {
var deleteaccount = $("#deleteForm");
    $("#deleteForm").on('submit', function(event) {
        event.preventDefault();
        
        var deleteValue = $("value"); 
            // Call AJAX    
            $.ajax({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/delete.php',
                success: function() {
                    if( deleteValue == "1") 
                    {
                        window.location.href = "index.html";
                        document.getElementById("delete").innerHTML = "Account deleted";
                    } else {
                        window.location.href = "profile.html";
                    }
                }
            });
        return false; 
    }); 
}); 