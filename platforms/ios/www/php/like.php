<?php
require_once('checklog.php');
require_once('functions.php');

    $like_id = clean_string($db_server, $_GET['likeid']);
    if($like_id and $like_id != ""){
        require_once("db_connect.php");
        $query = "UPDATE comments SET sentiment=sentiment+1 WHERE ID=$like_id";
        mysqli_query($db_server, $query) or die("Like failed" . $query . mysqli_error($db_server)); 
        $_SESSION['liked_' . $like_id] = $like_id;

    require_once("db_close.php");
}
?>