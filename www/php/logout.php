<?php
    session_start();
    // Unset all of the session variables.
    $_SESSION = array();
    $message = "You have logged out!!"; 
    // Destroy the session
    session_destroy();
?>