<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

$username = $_POST['username'];
if()
// Print out existing events to filter
$query = "SELECT * FROM events WHERE location = ‘LEEDS’";
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    
    $events[] = $row; 
}

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($events);

?>