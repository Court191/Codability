<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");

//Query the database
if($_POST['locations'] == 'Leeds') {  
    // query to get all Leeds events 
    $query = "SELECT * FROM events WHERE location='Leeds'";  
} 
elseif($_POST['locations'] == 'Newcastle') {  
    // query to get all Newcastle events 
    $query = "SELECT * FROM events WHERE location='Newcastle'";  
}
elseif($_POST['locations'] == 'London') {  
    // query to get all London events 
    $query = "SELECT * FROM events WHERE location='London'";  
}
else {  
    // query to get all events  
    $query = "SELECT eventname, date, time, location FROM events ORDER BY eventname";  
} 
$result = mysqli_query($db_server, $query);
//fetch the result
while($row = mysqli_fetch_array($result)){
    
    $filter[] = $row; 
}

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($filter);

?>