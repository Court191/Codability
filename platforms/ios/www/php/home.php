<?php
    require_once('checklog.php');
    require_once("db_connect.php"); 
    require_once("functions.php");

if($_POST['submit'] == "submit"){
        
        $comment = clean_string($db_server, $_POST['comment']);
        if ($comment != '') {
                $query = "INSERT INTO comments (userID, comment) VALUES (" .$_SESSION['userID'] . ", '$comment')";
                mysqli_select_db($db_server, $db_database);
                mysqli_query($db_server, $query) or
                                 die("Insert failed: " . mysqli_error($db_server));
                $message = "Thanks for your comment!";
            }
        } 
        
        // Print out existing comment
        $query = "SELECT comments.commDate, comments.ID, comments.userID, comments.comment, users.username, comments.sentiment FROM comments LEFT JOIN users ON comments.userID = users.ID";
        $result = mysqli_query($db_server, $query);
        if (!$result) die("Database access failed: " . mysqli_error($db_server)); 
        while($row = mysqli_fetch_array($result)){
        //$comments .= "<p>" . $row['comment'] . "</p>";
        $comments .= "<p><em><strong>" . $row['username'] . "</strong>, " .
        $row['commDate'] ." (rating=" . $row['sentiment']. ") " . "</em>";
        //CHECK THAT THE COMMENT USERID MATCHES SESSION USER ID
        if ($row['userID'] == $_SESSION['userID']){
        $comments .=" <a href='delete_post.php?pID=".$row['ID']."'>Delete</a>";
        }
                if(!isset($_SESSION["liked_" . $row['ID']])){
                        $comments .= "<a href='like.php?likeid=" . $row['ID'] ."'>Like</a>";
                }else{  
                        $comments .="Liked"; 
                }
        $comments .= "<br />" . $row['comment'] . "</p><hr />";
    }
        mysqli_free_result($result);

require_once("db_close.php");

include_once("header_logged.php");
?>

<div id="contentblog">
<h1>Blog</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/MtCMtC50gwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<form method="post" action="blog.php"> 
    <p>Create a Blog Post</p>
       Blog Post: <textarea rows="2" cols="30" name="comment"></textarea>
    <input type="submit" name="submit" value="submit" />
</form>

    <?php
        echo $message . $output;
        ?>
        <h4>Blog Entries</h4>
        <?php echo $comments; ?>

</div>
<?php include_once("footer.php"); ?>

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript">

    var int=self.setInterval("showComments()",5000);

    function showComments(){
        $.post("ajax_comments.php", function ( data ) {
            $("#comments").html( data );
        });
    }
</script>