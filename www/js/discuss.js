// When post button is clicked
$(document).ready(function() {
    var forum = $("#forumPost");
    $("#forumPost").on('submit', function(event) {
        event.preventDefault();
        var commentValue = document.getElementById("comment").value;
        
        var forum = new FormData(this);
        
    if (forum) {
        
         //Get Storage 
                var username = window.localStorage.getItem("username");
        
                forum.append('username', username);
        
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
                    document.getElementById("comment").innerHTML = response;
                } else {
                    console.log(response); 
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

/*
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
*/ 
      //var comment = 
       // var passwordValue = document.getElementById("password").value;
    
    /*// Call Ajax for existing comments
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/discuss.php',
        data: {comment: comment},
        success: function(response) 
        {
            document.getElementById("allcomments").innerHTML= response;
        }
    }); */
/*// Refresh comments
 var int=self.setInterval("showComments()",5000);

    function showComments(){
        $.post("ajax_comments.php", function ( data ) {
            $("#comments").html( data );
        });
    } */ 