// When login button is clicked
$(document).ready(function() {
    var loginform = $("#loginForm");
    $("#loginForm").on('submit', function(event) {
        event.preventDefault(); 
        var usernameValue = document.getElementById("username").value;
        var passwordValue = document.getElementById("password").value;

        var form = new FormData(); 
        if(usernameValue && passwordValue)
            {
                // Call Ajax
                $.ajax({
                    type: 'POST',
                    url: 'http://ll16clc.leedsnewmedia.net/Codability/www/login.php',
                    data: form,
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
  document.getElementById("loginForm").reset();
}