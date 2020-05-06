// When post button is clicked
$(document).ready(function() {
    var events = $("#eventPost");
    $("#eventPost").on('submit', function(event) {
        event.preventDefault();
        var locations = document.getElementById("locations").value;
        
        var events = new FormData(this); 
                
    if (events) {
        
        var value = $('#locations').val();
        console.log(value); 
        
        //$('#locations :selected').text();
        
    // Call Ajax for new comment
    $.ajax({
        type: 'POST',
        url: 'https://ll16clc.leedsnewmedia.net/Codability/www/php/filterevents.php',
        data: event, 
        processData: false, 
        contentType: false,
        success: function(result) {
                console.log(result);
                var arr = JSON.parse(result);
            
                for(var i = 0; i < arr.length; i++) {
                var obj = arr[i];   
                
                var output = document.getElementById("allevents");  
                
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