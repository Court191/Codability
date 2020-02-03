// When login button is clicked
function login() {
    var usernameValue = document.getElementById("username").value;
    var passwordValue = document.getElementById("password").value;
    
    var loginForm = new FormData(); 
    if(usernameValue && passwordValue)
        {
            var form = document.querySelector('loginform');
                userDetails = new FormData(form);
            
            $.ajax ({
                type: 'POST',
                url: '/www/php/login.php',
                data: formData,
                success: function(response) {
                    if(response == "success")
                        {
                            window.location.href="home.html"; 
                        }
                    else {
                        alert("Wrong Details");
                    }
                }
            });
        }
    else {
        alert("Please Fill All The Fields");
    }
    return false;
}

// When reset button is clicked

