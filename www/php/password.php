<?php 
    require_once('checklog.php');
    require_once("db_connect.php");
    require_once("functions.php");

    $submit = trim($_POST['submit']);
    $oldpassword = trim($_POST['oldpassword']);
    $newpassword = trim($_POST['newpassword']); 
    $repeatpassword = trim($_POST['repeatpassword']);
    $message = '';
    $s_username = '';
  
        session_start();

        if ($oldpassword&&$newpassword&&$repeatpassword) {
            if ($newpassword==$repeatpassword){
                        if (strlen($newpassword)>25||strlen($newpassword)<6) {
                                  $message = "Password must be 6-25 characters long";
                              }else{
                                    // Process details
                                    if($db_server){
                                        //clean the input now that we have a db connection
                                        $oldpassword = clean_string($db_server, $oldpassword);
                                        $newpassword = clean_string($db_server, $newpassword); 
                                        $repeatpassword = clean_string($db_server, $repeatpassword); 
                                        mysqli_select_db($db_server, $db_database);
                                        
                                        $query="SELECT * FROM users WHERE username='". $username . "'"; 
                                        $result=mysqli_query($db_server, $query);
                                        $message = "Hey";
                                        if ($row = mysqli_fetch_array($result)){
                                            $message = "Hiii";
                                            $db_password = $row['password'];
                                            $db_id = $row['ID'];
                                            if (password_verify($oldpassword, $db_password)) {
                                                $hash = password_hash($newpassword, PASSWORD_DEFAULT); 
                                                $query = "UPDATE users SET password= '$hash' WHERE ID=$db_id";
                                                mysqli_query($db_server, $query) or die("Insert failed. ". mysqli_error($db_server)); 
                                                $message = "Success";
                                            }
                                           mysqli_free_result($result);
                                        }
                                    }
                             }
            }else{
                $message = "Both password fields must match";
                }
    }else{
            $message = "Please enter all fields";
        }
require_once("db_close.php"); 
echo $message; 
?> 