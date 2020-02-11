<?php
require_once('checklog.php');
require_once('functions.php');
$postID = trim($_GET['pID']);
if($postID != '' && is_numeric($postID)){
    require_once("db_connect.php");
    if (!$db_server){
            die("Unable to connect to DB: " . mysqli_connect_error($db_server));
}else{
        $postID = clean_string($db_server, $postID);
        mysqli_select_db($db_server,$db_database) or die("Couldn't find db");
        //DELETE post FROM comments
        $query = "DELETE FROM comments WHERE ID=$postID";
        mysqli_query($db_server, $query) or
                        die("Comment delete failed" . mysqli_error($db_server));
        //Redirect back to index
        header('Location: home.php');
    }
    require_once("db_close.php");
}else{
    header('location: home.php');
}
?>