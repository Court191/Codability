$(document).ready(function() {
    
     var comments = document.getElementById("allcomments").value; 
    
     //Get Storage 
                var username = window.localStorage.getItem("username");
    
        // Call Ajax for existing comments
        $.ajax({
        type: 'GET',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/events.php',
        success: function(result) {


        }
    });
    
    return false;
}); 