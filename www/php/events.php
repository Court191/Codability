<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

$username = $_POST['username'];

if($_POST['submit'] == "submit"){
            $unsafe_outlet = $_POST["eventname"];
                
            $outlet = clean_string($db_server, $_POST["eventname"]) ;
            // create the SQL query
            $query = "SELECT eventname, date, time, location FROM event
            WHERE eventname='$outlet'";
            // query the database
            mysqli_select_db($db_server, $db_database);
            $result = mysqli_query($db_server, $query);
            if (!$result) die("Database access failed: " . mysqli_error($db_server) . " ". $query);
            // if there are any rows, print out the contents
            $message = "Thanks for your input!<p>Your search found the following outlets:</p>";
            while($row = mysqli_fetch_array($result)){
            $output .= '<p>' . $row['eventname'] . ' ' . $row['date'] . ', '. $row['time'] . ' ' . $row['location'] .'</p>';
                
            //$events[] = $row; 
        }
    mysqli_free_result($result);
        
        } 
        
        //If connected, get outlet names from DB and write out DropDownMenu
        mysqli_select_db ($db_server, $db_database);
        $query =  "SELECT eventname FROM events ORDER BY eventname";
        $result = mysqli_query($db_server, $query);
        if (!$result) die("Query failed: " . mysqli_error($db_server));
        
        while($row = mysqli_fetch_array($result)){
            $str_options .= "<option value='" . $row ['eventname'] . "'>";
            $str_options .=     $row['eventname'];
            $str_options .= "</option>";
        }

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($events);

?>