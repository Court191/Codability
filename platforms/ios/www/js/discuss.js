// When post button is clicked
$(document).ready(function() {
    var forum = $("#forumPost");
    $("#forumPost").on('submit', function(event) {
        event.preventDefault();
        
        var commentValue = "";
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
        
    if (forum) {   
        
        var commentValue = document.getElementById("#comment").value;
    // Call Ajax for new comment
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/discuss.php',
        data: {comment: comment},
        success: function(response) {
                if(response == "Success")  
                {
                    //document.getElementById("comment").innerHTML = response;
                    //var commentValue = document.getElementById("comment").value;
                    //commentValue = document.getElementById("#comment").value;
                } else {
                    document.getElementById("error").innerHTML = response;
                } 
            } 
        });
    }
    return false;
    });

});  

/*// Refresh comments
 var int=self.setInterval("showComments()",5000);

    function showComments(){
        $.post("ajax_comments.php", function ( data ) {
            $("#comments").html( data );
        });
    } */ 