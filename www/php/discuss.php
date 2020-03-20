<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

$username = $_POST['username'];

$comment = clean_string($db_server, $_POST['comment']);
if ($comment != '') {
    $query = "INSERT INTO comments (username, comment) VALUES (username, comment)";
    mysqli_select_db($db_server, $db_database);
    mysqli_query($db_server, $query) or die("Insert failed: " . mysqli_error($db_server));
    $message = "Thanks for your comment!";
    }

require_once("db_close.php");

echo $message;

?>