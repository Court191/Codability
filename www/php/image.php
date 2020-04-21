<?php
    require_once('checklog.php');
    require_once("functions.php");
    require_once("db_connect.php");

$username = $_POST['username'];

$message = "Hello!";
if($_POST['submit'] == "Upload Image"){
    $target_dir = "images/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            $message = "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            $message = "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if (file_exists($target_file)) {
        $message = "Sorry, file already exists.";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 500000) {
        $message = "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
        $message = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        $message = "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            
            $uploadedfilename= basename( $_FILES["fileToUpload"]["name"]);
            $query = "UPDATE users SET imagename='$uploadedfilename' WHERE username='$username'";
            mysqli_query($db_server, $query) or die("Insert failed. ". mysqli_error($db_server)); 
            $message = "<strong>Image $uploadedimage upload successful!</strong>";
            
            
        } else {
            $message = "Sorry, there was an error uploading your file.";
        }
    }
}

$currentimagename = "profilepic.png";
$query="SELECT imagename FROM users WHERE username='$username'"; 
$result = mysqli_query($db_server, $query) or die("image load failed. ". mysqli_error($db_server)); 
if($row = mysqli_fetch_array($result)){
    if($row['imagename']<>""){
        $currentimagename = $row['imagename'];
    }   
}
mysqli_free_result($result);

echo $message;

?>