$(document).ready(function() {
    
     var comments = document.getElementById("allcomments").value; 
    
     //Get Storage 
                var username = window.localStorage.getItem("username");
    
        // Call Ajax for existing comments
        $.ajax({
        type: 'GET',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/comments.php',
        success: function(result) {
            var arr = JSON.parse(result);
            
            for(var i = 0; i < arr.length; i++) {
                var obj = arr[i];   
                
                var output = document.getElementById("allcomments");  
                
                output.innerHTML += '<div class="comment-container"><div class="username">'+obj.username+'</div><div class="comment">'+obj.comment+'</div><div class="date">'+obj.commDate+'</div><div class="like">'+obj.sentiment+'</div></div>';
                
            }

        }
    });
    
    return false;
}); 