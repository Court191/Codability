$(document).ready(function() {
document.getElementById("username").innerHTML = "Welcome" + "    " + window.localStorage.getItem("username");

//Get Storage 
    var username = window.localStorage.getItem("username");
    
}); 