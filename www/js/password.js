// When change button is clicked
$(document).ready(function() {
    var passwordform = $("#passwordForm");
    $("#passwordForm").on('submit', function(event) {
        event.preventDefault();
        var oldpasswordValue = document.getElementById("oldpassword").value; 
        var newpasswordValue = document.getElementById("newpassword").value; 
        var repeatpasswordValue = document.getElementById("repeatpassword").value;
        
        if (oldpassword && newpassword && repeatpassword){
            if (newpassword == repeatpassword){
            // Call AJAX    
            $.ajax({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/password.php',
                data: {username: username},
                success: function(response) {
                    console.log("hello123");
                    if( response == "") 
                    {
                        document.getElementById("change").innerHTML = "Password Change Successful";
                    } else {
                        document.getElementById("error").innerHTML = response;
                    }
                }
            });
            } else {
                document.getElementById("error").innerHTML = "Both password fields must match";
            }
        } else {  document.getElementById("error").innerHTML = "Please Fill All The Fields";
               } 
        return false; 
    }); 
}); 