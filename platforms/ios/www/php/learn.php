<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

// Print out existing tips and articles
$query = "SELECT title, description, resourcetype, URL FROM learn ORDER BY title";
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    
    $learn[] = $row; 

}

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($learn);

?>