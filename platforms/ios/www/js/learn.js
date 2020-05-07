$(document).ready(function() {
    
        $.ajax({
        type: 'GET',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/learn.php',
        success: function(result) {
            var arr = JSON.parse(result);
            
                for(var i = 0; i < arr.length; i++) {
                var obj = arr[i];   
                
                var output = document.getElementById("resource");  
                    
                output.innerHTML += '<div class="comment-container"><div class="title">'+obj.title+'</div><div class="description">'+obj.description+'</div><div class="resourcetype">'+obj.resourcetype+'</div><div class="URL">'+obj.URL+'</div></div>'; 
                
            }
        }
    });
});