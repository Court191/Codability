<?php
require_once("functions.php");
session_start();
$username = trim($_POST['username']);
$password = trim($_POST['password']);
if ($username && $password) {
    require_once("db_connect.php");
    mysqli_select_db($db_server, $db_database) or die("Couldn't find db");
    $username = clean_string($db_server, $username);
    $password = clean_string($db_server, $password);
    $query    = "SELECT * FROM users WHERE username='$username'";
    $result   = mysqli_query($db_server, $query);
    if ($row = mysqli_fetch_array($result)) {
        $db_password = $row['password'];
        $db_id       = $row['ID'];
        if (password_verify($password, $db_password)) {
            $_SESSION['username'] = $username;
            $_SESSION['userID']   = $db_id;
            $_SESSION['logged']   = "logged";
            $message              = "Success";
        } else {
            $message = "<h2>Incorrect password!</h2>";
        }
    } else {
        $message = "<h2>That user does not exist!</h2>" . "Please <a href='register.php'>try again</a>";
    }
    mysqli_free_result($result);
    require_once("db_close.php");
} else {
    $message = "<h1>Please enter a valid username/password</h1>";
}
echo $message;
?>