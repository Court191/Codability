<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

    $message = "here";

$comment = clean_string($db_server, $_POST['comment']);
if ($comment != '') {
    $query = "INSERT INTO comments (username, comment) VALUES (" . $username['username'] . ", $comment)";
    mysqli_select_db($db_server, $db_database);
    mysqli_query($db_server, $query) or die("Insert failed: " . mysqli_error($db_server));
    $message = "Thanks for your comment!";
    }

// Print out existing comment
$query  = "SELECT comments.commDate, comments.ID, comments.username, comments.comment, users.username, comments.sentiment FROM comments LEFT JOIN users ON comments.username = users.username";
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    //$comments .= "<p>" . $row['comment'] . "</p>";
    $comments .= "<p><em><strong>" . $row['username'] . "</strong>, " . $row['commDate'] . " (rating=" . $row['sentiment'] . ") " . "</em>";
    //CHECK THAT THE COMMENT USERID MATCHES SESSION USER ID
    if ($row['username'] == $_SESSION['username']) {
        $comments .= " <a href='delete_post.php?pID=" . $row['ID'] . "'>Delete</a>";
    }
    if (!isset($_SESSION["liked_" . $row['ID']])) {
        $comments .= "<a href='like.php?likeid=" . $row['ID'] . "'>Like</a>";
    } else {
        $comments .= "Liked";
    }
    $comments .= "<br />" . $row['comment'] . "</p><hr />";
}
mysqli_free_result($result);

require_once("db_close.php");

echo $message;
?>