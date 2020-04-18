// When upload image button is clicked
$(document).ready(function() {
    var imageform = $("#imageForm");
    $("#imageForm").on('submit', function(event) {
        event.preventDefault();
        var imageValue = document.getElementById("fileToUpload").value; 
        
        var imageform = new FormData(this);
            
            //Get Storage 
                var username = window.localStorage.getItem("username");
            
                imageform.append('username', username);
            
            // Call AJAX    
            $.ajax({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/image.php',
                data: imageform,
                processData: false, 
                contentType: false,
                success: function(response) {
                    if(response == "Success"){
                        document.getElementById("image").innerHTML = "Image Change Successful";
                    } else {
                        console.log(response); 
                        document.getElementById("error").innerHTML = response;
                    }
                }
            });  
        return false; 
    }); 
}); 