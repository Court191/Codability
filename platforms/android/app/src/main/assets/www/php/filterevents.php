<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");

//Query the database
if($_POST['value'] == 'Leeds') {  
    // query to get all Leeds events 
    $query = mysql_query("SELECT * FROM events WHERE location='Leeds'");  
} 
elseif($_POST['value'] == 'Newcastle') {  
    // query to get all Newcastle events 
    $query = mysql_query("SELECT * FROM events WHERE location='Newcastle'");  
}
elseif($_POST['value'] == 'London') {  
    // query to get all London events 
    $query = mysql_query("SELECT * FROM events WHERE location='London'");  
}
else {  
    // query to get all events  
    $query = mysql_query("SELECT eventname, date, time, location FROM events ORDER BY eventname");  
} 
//fetch the result
while($row = mysqli_fetch_array($query)){
    
    $filter[] = $row; 
}

mysqli_free_result($query);

require_once("db_close.php");

//echo $query;

//echo json_encode($filter);

?>