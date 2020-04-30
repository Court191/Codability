<?php 
// once a quiz is complete, add a status to the session. This could also be stored client side
session_start();

if(!isset($_SESSION['NumberComplete'])){
    $_SESSION['NumberComplete'] = 0;
}

// run this when the quiz is completed to increment the counter
$_SESSION['NumberComplete'] = (isset($_SESSION['NumberComplete']) ? $_SESSION['NumberComplete']++ : 1);

// read out the data on page load into a js var
echo '<script>var numberComplete='.$_SESSION['NumberComplete'].';</script>';
?> 