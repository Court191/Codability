<?php
    require_once("functions.php");
    $submit = trim($_POST['submit']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']); $repeatpassword = trim($_POST['repeatpassword']); 
    // Create some variables to hold output data $message = '';
    $s_username = '';
    // Start to use PHP session
    session_start();
    // Determine whether user is logged in - test for value in $_SESSION
    if (isset($_SESSION['logged'])){
    $s_username = $_SESSION['username'];
    $message = "You are already logged in as $s_username.
                Please <a href='logout.php'>logout</a> before trying to register.";
    }else{
      // Next block of code will go here
    if ($submit=='Register'){
        // Process submission here
        $data = json_decode($response);
        if (isset($data->success) AND $data->success==true) {
            // Process valid submission data here
            if ($username&&$password&&$repeatpassword){ 
                if ($password==$repeatpassword){
                  // Process username details here
                    if (strlen($username)>25) {
                        $message = "Username is too long";
                    }else{
                          if (strlen($password)>25||strlen($password)<6) {
                              $message = "Password must be 6-25 characters long";
                          }else{
                                // Process details here
                                require_once("db_connect.php"); //include file to do db connect 
                                if($db_server){
                                    //clean the input now that we have a db connection
                                    $username = clean_string($db_server, $username);
                                    $password = clean_string($db_server, $password); 
                                    $repeatpassword = clean_string($db_server, $repeatpassword); 
                                    mysqli_select_db($db_server, $db_database);
                                    // check whether username exists
                                    $query="SELECT username FROM users WHERE username='$username'"; $result=mysqli_query($db_server, $query);
                                    if ($row = mysqli_fetch_array($result)){
                                        $message = "Username already exists. Please try again."; 
                                    }else{
                                        // Process further here
                                        $hash = password_hash($password, PASSWORD_DEFAULT); 
                                        $query = "INSERT INTO users (username, password) VALUES
                                                                ('$username', '$hash')";
                                        mysqli_query($db_server, $query) or
                                                            die("Insert failed. ". mysqli_error($db_server)); 
                                        $message = "<strong>Registration successful!</strong>";
                                    }
                                    mysqli_free_result($result);
                                }else{
                                    $message = "Error: could not connect to the database."; 
                                }
                                require_once("db_close.php"); //include file to do db close
                          }
                    }
                }else{
                 $message = "Both password fields must match"; 
                }
            }else{
                $message = "Please fill in all fields";
            }
        }
    }
}

    echo $message;
?>