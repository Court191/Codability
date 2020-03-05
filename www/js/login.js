// When login button is clicked
$(document).ready(function() {
    var loginform = $("#loginForm");
    $("#loginForm").on('submit', function(event) {
        event.preventDefault(); 
        var usernameValue = document.getElementById("username").value;
        var passwordValue = document.getElementById("password").value;
        
        var form = new FormData(this); 
        if(usernameValue && passwordValue)
            {
                // Call Ajax
                $.ajax({
                    type: 'POST',
                    url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/login.php',
                    data: form,
                    processData: false, 
                    contentType: false,
                    success: function(response) {
                            if(response == "Success")  
                            {
                                window.location.href="home.html";  
                                
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
  document.getElementById("loginForm").reset();
} 
