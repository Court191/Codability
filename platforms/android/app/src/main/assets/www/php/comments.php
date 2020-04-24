<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

// Print out existing comment
$query  = "SELECT comments.commDate, comments.ID, comments.username, comments.comment, users.username, comments.sentiment FROM comments LEFT JOIN users ON comments.username = users.username"; 
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    
    $comments[] = $row; 
}

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($comments);

?>