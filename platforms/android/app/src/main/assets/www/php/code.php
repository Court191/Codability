$query = "INSERT INTO comments (username, comment) VALUES (" . $username['username'] . ", $comment)";

it doesn't look like you've done anything to your comments php file cos it looks the second year project to me :/ 

it's not gonna work cos you're trying to present php back to ajax which doesn't work (although you might know but at the minute you're trying to echo the $message variable which doesn't exist at all in your php). 

once you know your SQL query is right you need to send the result of that back to javascript and 

then manipulate it in javascript to get it looking how you want. 

you'll need to look into how you can send this result back to javascript (1 clue, arrays!), 

and then once you've given it back to javascript look at how you can go through this data and present it how you want.