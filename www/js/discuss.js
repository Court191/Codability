// When post button is clicked
$(document).ready(function() {
    var forum = $("#forumPost");
    $("#forumPost").on('submit', function(event) {
        event.preventDefault(); 
        var commentValue = document.getElementById("commentbox").value;
    
    // Call Ajax for existing comments
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/discuss.php',
        success: function(response) 

    // Call Ajax for new comment
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/discuss.php',
        success: function(response) {
                if(response == "Success")  
                {
                    document.getElementById("comment").innerHTML = response;
                } else {
                    document.getElementById("error").innerHTML = response;
                } 
            } 
        });
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