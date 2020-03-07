// When register button is clicked 
$(document).ready(function() {
    var registerform = $("#registerForm");
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        var usernameValue = document.getElementById("username").value; 
        var passwordValue = document.getElementById("password").value; 
        var repeatpasswordValue = document.getElementById("repeatpassword").value;
        
        var regform = new FormData(this); 
        if(usernameValue && passwordValue && repeatpasswordValue)
        {
            // Call Ajax 
            $.ajax ({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/register.php',
                data: regform,
                processData: false, 
                contentType: false,
                success: function(response) {
                if(response == "Success")
                {
                    document.getElementById("success").innerHTML = "Registration Successful!"; 
                    
                    //Local Storage 
                    window.localStorage.setItem("username", usernameValue); 
                    
                } else {
                    document.getElementById("error").innerHTML = response;
                       } 
                    }
                });
            } else {
                document.getElementById("error").innerHTML = "Please Fill All The Fields";
        }
        return false;
    });
}); 

// When reset button is clicked
function clear() {
  document.getElementById("registerForm").reset();
}