<?php

require_once('checklog.php');
require_once("db_connect.php");
require_once("functions.php");
  
session_start();

$username = $_POST['username'];

// Print out existing comment
$query = "SELECT eventname, date, time, location FROM events ORDER BY eventname";
$result = mysqli_query($db_server, $query);
if (!$result)
    die("Database access failed: " . mysqli_error($db_server));
while ($row = mysqli_fetch_array($result)) {
    
    $events[] = $row; 

}

if($_POST['submit'] == "submit"){

        //If connected, get outlet names from DB and write out DropDownMenu
        mysqli_select_db ($db_server, $db_database);
        $query =  "SELECT eventname FROM events ORDER BY location";
        $result = mysqli_query($db_server, $query);
        if (!$result) die("Query failed: " . mysqli_error($db_server));
        
        while($row = mysqli_fetch_array($result)){
            $str_options .= "<option value='" . $row ['eventname'] . "'>";
            $str_options .=     $row['eventname'];
            $str_options .= "</option>";
        }
}

mysqli_free_result($result);

require_once("db_close.php");

echo json_encode($events);
echo ($str_options);

?>