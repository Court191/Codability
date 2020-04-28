<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

$username = $_POST['username'];

// Print out existing comment
$query  = "SELECT comments.commDate, comments.ID, comments.username, comments.comment, users.username, comments.sentiment FROM comments LEFT JOIN users ON comments.username = users.username"; 
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    
    $comments[] = $row; 
//CHECK THAT THE COMMENT USERID MATCHES SESSION USER ID
if ($row['username'] == $username['username']){
$comments .=" <a href='delete_post.php?pID=".$row['ID']."'>Delete</a>";
}
        if(!isset($username["liked_" . $row['ID']])){
                $comments .= "<a href='like.php?likeid=" . $row['ID'] ."'>Like</a>";
        }else{  
                $comments .="Liked"; 
        } 
}

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($comments);

?>