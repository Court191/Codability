<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");

if ($_POST['submit'] == "submit") {
    $message = "Hello";
    $comment = clean_string($db_server, $_POST['comment']);
    if ($comment != '') {
        $query = "INSERT INTO comments (userID, comment) VALUES (" . $_SESSION['userID'] . ", '$comment')";
        mysqli_select_db($db_server, $db_database);
        mysqli_query($db_server, $query) or die("Insert failed: " . mysqli_error($db_server));
        $message = "Thanks for your comment!";
    }
}

// Print out existing comment
$query  = "SELECT comments.commDate, comments.ID, comments.userID, comments.comment, users.username, comments.sentiment FROM comments LEFT JOIN users ON comments.userID = users.ID";
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    //$comments .= "<p>" . $row['comment'] . "</p>";
    $comments .= "<p><em><strong>" . $row['username'] . "</strong>, " . $row['commDate'] . " (rating=" . $row['sentiment'] . ") " . "</em>";
    //CHECK THAT THE COMMENT USERID MATCHES SESSION USER ID
    if ($row['userID'] == $_SESSION['userID']) {
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

include_once("header_logged.php");

?>