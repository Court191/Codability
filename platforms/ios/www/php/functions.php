<?php
    function clean_string($db_server = null, $string){
        // Remove whitespace
        $string = trim($string);
        $string = utf8_decode($string);
        // Test whether a connection is open, or the it returns an error
        if($db_server){
            if (mysqli_real_escape_string($db_server, $string)) {
            //Remove characters potentially harmful to the database
            $string = mysqli_real_escape_string($db_server, $string);
            }
        }
        // Strip dangerous escape characters (stripslahes is in the get_magic_quotes library)
        if (get_magic_quotes_gpc()) {
            $string = stripslashes($string);
        }
        // Return the processed data, with HTML tags transform into harmless escape characters
        return htmlentities($string);
}
?>