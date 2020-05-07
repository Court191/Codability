// When post button is clicked
$(document).ready(function() {
    var learn = $("#learnForm");
    $("#learnForm").on('submit', function(event) {
        event.preventDefault();
        
        var learn = new FormData(this); 
                
    if (learn) {
        
    // Call Ajax for filter events
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/filterlearn.php',
        data: learn, 
        processData: false, 
        contentType: false,
        success: function(result) {
                var arr = JSON.parse(result);
             
               document.getElementById("resource").innerHTML = ""; 
            
               document.getElementById("filterlearn").innerHTML = ""; 
               for(var i = 0; i < arr.length; i++) {
                var obj = arr[i]; 
                    
                var resources = document.getElementById("resources").value; 
                
                var output = document.getElementById("filterlearn");  
                 
               output.innerHTML += '<div class="comment-container"><div class="title">'+obj.title+'</div><div class="description">'+obj.description+'</div><div class="resourcetype">'+obj.resourcetype+'</div><div class="URL">'+obj.URL+'</div></div>'; 
                }
            } 
        });
    } else { 
        document.getElementById("error").innerHTML = "Please Choose A Resource";
    }        
    return false;
    });

});  