$(document).ready(function() {
    
     var commentValue = document.getElementById("allcomments").value; 
    
     //Get Storage 
                var username = window.localStorage.getItem("username");
    
        // Call Ajax for existing comments
        $.ajax({
        type: 'GET',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/comments.php',
        success: function(response) 
        {
            console.log(response);
            document.getElementById("allcomments").innerHTML= response;
        }
    });
}); 