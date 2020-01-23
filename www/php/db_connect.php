<?php
$db_hostname = 'localhost';
            $db_database = 'll16clc_Codability'; //replace with your db name
            $db_username = 'll16clc_CAuser'; //replace with the db username that you created 
            $db_password = '6sbxhwgd19'; //replace with the db password that you created $db_status = 'not initialised';
            $output = '';
            $db_server = mysqli_connect($db_hostname, $db_username, $db_password);
            $db_status = "connected";
if (!$db_server){
    die("Unable to connect to MySQL: " . mysqli_error($db_server));
    $db_status = "not connected"; 
    }
    mysqli_select_db($db_server, $db_database);
?>