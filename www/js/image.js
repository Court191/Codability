// When upload image button is clicked
$(document).ready(function() {
    var imageform = $("#imageForm");
    $("#imageForm").on('submit', function(event) {
        event.preventDefault();
        var fileToUpload = document.getElementById("fileToUpload").value; 
        
        //Set Local Store for Image
        window.localStorage.setItem("fileToUpload", fileToUpload);
            
            //Get Storage 
                var username = window.localStorage.getItem("username");
            
                //imageform.append('username', username);
        
                var image = window.localStorage.getItem("fileToUpload");
        
                //imageform.append('fileToUpload', fileToUpload);
            
            // Call AJAX    
            $.ajax({
                type: 'POST',
                url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/image.php',
                data: imageform,
                processData: false, 
                contentType: false,
                success: function(data) {
                    if(data == "Success"){
                        document.getElementById("image").innerHTML = "Image Change Successful";
                        
                        var image = window.localStorage.getItem("fileToUpload");
                        $("#targetimage").html(data);
                    
                    } else {
                        document.getElementById("error").innerHTML = "Error Uploading Image";
                    }
                }
            });  
    }); 
});	        