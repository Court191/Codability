// When post button is clicked
$(document).ready(function() {
    var forum = $("#forumPost");
    $("#forumPost").on('submit', function(event) {
        event.preventDefault();
        var commentValue = document.getElementById("comment").value;
        
        var forum = new FormData(this); 
        
    if (forum) { 
        
        //Reload page 
                  setTimeout(function() {
                    location.reload();
                }, 1000); 
        
         //Get Storage 
                var username = window.localStorage.getItem("username");
        
                forum.append('username', username);
        
        //Display the values
                for (var value of forum.values(username)) {
                   // console.log(value);
                }
        
    // Call Ajax for new comment
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/discuss.php',
        data: forum, 
        processData: false, 
        contentType: false,
        success: function(response) {
                if(response == "Success")  
                {
                  document.getElementById("comment").innerHTML = "Your comment has been posted!"; 
    
                } else { 
                    document.getElementById("error").innerHTML = response;
                } 
            } 
        });
    } else { 
        document.getElementById("error").innerHTML = "Please Fill in your Post";
    }        
    return false;
    });

}); 