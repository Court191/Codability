<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");

//Query the database
if($_POST['resources'] == 'Articles') {  
    // query to get all coding article
    $query = "SELECT * FROM learn WHERE resourcetype='Article'";  
} 
elseif($_POST['resources'] == 'Tips') {  
    // query to get all coding tips
    $query = "SELECT * FROM learn WHERE resourcetype='Tip'";  
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