// When post button is clicked
$(document).ready(function() {
        
     function singleSelectChangeValue() {
        //Getting Value
        
        // METHOD 1
        var selValue = document.getElementById("locations").value;
        
        //METHOD 2
        var selObj = document.getElementById("locations");
        var selValue = selObj.options[selObj.selectedIndex].value;
        
        //Setting Value
        document.getElementById("Search").value = selValue;
    }
    

}); 