// When register button is clicked 
$(document).ready(function() {
    var registerform = $("#registerForm");
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        var usernameValue = document.getElementById("username").value; 
        var passwordValue = document.getElementById("password").value; 
        var repeatpasswordValue = document.getElementById("repeatpassword").value;
        
        var regform = new FormData(); 
        if(usernameValue && passwordValue && repeatpasswordValue)
        {
            // Call Ajax 
            $.ajax ({
                type: 'POST',
                url: 'http://ll16clc.leedsnewmedia.net/Codability/www/register.php',
                    data: regform,
                    processData: false, 
                    contentType: false,
                    success: function(response) {
                    if(response == "success")
                            {
                                window.location.href="home.html"; 
                            } else {
                            alert("Wrong Details");
                        }
                    }
                });
            } else {
            alert("Please Fill All The Fields");
        }
        return false;
    });
}); 

// When reset button is clicked
function reset() {
  document.getElementById("registerForm").reset();
}