// When post button is clicked
$(document).ready(function() {
    var events = $("#eventForm");
    $("#eventForm").on('submit', function(event) {
        event.preventDefault();
        
        var events = new FormData(this); 
                
    if (events) {
        
    // Call Ajax for filter events
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/filterevents.php',
        data: events, 
        processData: false, 
        contentType: false,
        success: function(result) {
                var arr = JSON.parse(result);
             
               document.getElementById("allevents").innerHTML = ""; 
            
               document.getElementById("filterevents").innerHTML = ""; 
               for(var i = 0; i < arr.length; i++) {
                var obj = arr[i]; 
                    
                var locations = document.getElementById("locations").value; 
                
                var output = document.getElementById("filterevents");  
                
                output.innerHTML += '<div class="comment-container"><div class="eventname">'+obj.eventname+'</div><div class="date">'+obj.date+'</div><div class="time">'+obj.time+'</div><div class="location">'+obj.location+'</div></div>'; 
                }
            } 
        });
    } else { 
        document.getElementById("error").innerHTML = "Please Choose A Location";
    }        
    return false;
    });

});  