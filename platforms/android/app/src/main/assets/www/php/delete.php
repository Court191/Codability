<?php
    require_once('checklog.php');
    include_once('functions.php');
    $username = $_POST['username'];
        if(trim($_POST['username'])) {
                require_once("db_connect.php");
                session_start();
                if (!$db_server){  
                    die("Unable to connect to MySQL: " .
                                mysqli_connect_error($db_server));
                }else{
                        mysqli_select_db($db_server, $db_database) or
                        die("<h1>Couldn't find db</h1>");
                        /*DELETE records from comments table
                        $query="DELETE FROM comments WHERE username=$username";
                        mysqli_query($db_server, $query) or
                        die("Delete 1 failed".mysqli_error($db_server)); */
                        //DELETE record from users table
                        $query = "DELETE FROM users WHERE username='" . $username . "'";
                        mysqli_query($db_server, $query) or
                        die("Delete 2 failed".mysqli_error($db_server));
                        //LOGOUT AND DESTROY SESSION
                        $_SESSION = array();
                        session_destroy(); 
                }
                require_once("db_close.php");
        }
echo $message; 
?> 