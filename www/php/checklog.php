<?php
    session_start();
    if (!isset($_SESSION['logged'])){
        $_SESSION = array();
        session_destroy();
    }
?>