$(document).ready(function() {
    
     var events = document.getElementById("allevents").value; 
    
     //Get Storage 
                var username = window.localStorage.getItem("username");
    
        // Call Ajax for existing comments
        $.ajax({
        type: 'GET',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/events.php',
        success: function(result) {
            var arr = JSON.parse(result);
            
                for(var i = 0; i < arr.length; i++) {
                var obj = arr[i];   
                
                var output = document.getElementById("allevents");  
                
                output.innerHTML += '<div class="comment-container"><div class="eventname">'+obj.eventname+'</div><div class="date">'+obj.date+'</div><div class="time">'+obj.time+'</div><div class="location">'+obj.location+'</div></div>';
                
            }
        }
    });
            
    var registerform = $("eventForm");
    $('#eventForm').on('submit', function(event) {
        event.preventDefault();
        
        var eventform = new FormData(this); 

            // Call Ajax 
            $.ajax ({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/events.php',
                data: eventform,
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
            });  

    return false;
}); 
