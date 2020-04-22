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

                console.log(obj);   
                
                var output = document.getElementById("allcomments"); 
                output.innerHTML += (obj.username + ' ' + obj.comment + ' ' + obj.commDate + ' ' + obj.sentiment + '<br>'); 
                
            }

        }
    });
    
    return false;
}); 

/*//Refresh comments
 var int=self.setInterval("showComments()",5000);

    function showComments(){
        $.post("comments.php", function ( arr ) {
            $("#allcomments").html( arr );
        });
    } */