// When change button is clicked
$(document).ready(function() {
    var passwordform = $("#passwordForm");
    $("#passwordForm").on('submit', function(event) {
        event.preventDefault();
        var oldpasswordValue = document.getElementById("oldpassword").value; 
        var newpasswordValue = document.getElementById("newpassword").value; 
        var repeatpasswordValue = document.getElementById("repeatpassword").value;
        
        var passwordform = new FormData(this);
        
        if (oldpassword && newpassword && repeatpassword) {
            
            //Get Storage 
                var username = window.localStorage.getItem("username");
            
                passwordform.append('username', username);
            
            // Call AJAX    
            $.ajax({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/password.php',
                data: passwordform,
                processData: false, 
                contentType: false,
                success: function(response) {
                    if(response == "Success"){
                        document.getElementById("change").innerHTML = "Password Change Successful";
                    } else {
                        document.getElementById("error").innerHTML = response;
                    }
                }
            }); 
        } else {  document.getElementById("error").innerHTML = "Please Fill All The Fields";
        } 
        return false; 
    }); 
}); 

// When reset button is clicked
function clear() {
  document.getElementById("passwordForm").reset();
} 
