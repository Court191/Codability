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
elseif($_POST['locations'] == 'Liverpool') {  
    // query to get all Liverpool events 
    $query = "SELECT * FROM events WHERE location='Liverpool'";  
} 
elseif($_POST['locations'] == 'Manchester') {  
    // query to get all Manchester events 
    $query = "SELECT * FROM events WHERE location='Manchester'";  
} 
elseif($_POST['locations'] == 'Bristol') {  
    // query to get all Bristol events 
    $query = "SELECT * FROM events WHERE location='Bristol'";  
} 
elseif($_POST['locations'] == 'Birmingham') {  
    // query to get all Birmingham events 
    $query = "SELECT * FROM events WHERE location='Birmingham'";  
} 
elseif($_POST['locations'] == 'Edinburgh') {  
    // query to get all Edinburgh events 
    $query = "SELECT * FROM events WHERE location='Edinburgh'";  
} 
elseif($_POST['locations'] == 'York') {  
    // query to get all York events 
    $query = "SELECT * FROM events WHERE location='York'";  
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