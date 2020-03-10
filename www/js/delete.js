// When delete account button is clicked
$(document).ready(function() {
var deleteaccount = $("#deleteForm");
    $("#deleteForm").on('submit', function(event) {
        event.preventDefault();
    
        if ($('input[name=delete]:checked').val() == "1") {
            
            //Get Storage 
                var username = window.localStorage.getItem("username");
 
            // Call AJAX    
            $.ajax({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/delete.php',
                data: {username: username}, 
                success: function(data) {
                    console.log(data); 
                        document.getElementById("delete").innerHTML = "Account Successfully Deleted! Please logout";
                    } 
            });
        } else if ($('input[name=delete]:checked').val() == "0") {
                    window.location.href = "profile.html";
                  }
        return false; 
    }); 
}); 