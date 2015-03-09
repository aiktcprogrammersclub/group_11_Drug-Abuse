

<?php

$host="localhost";
$user="root";
$pass="root";

$conn=mysql_connect("$host","$user","$pass");
mysql_select_db("workshop",$conn);



$sql="insert into register(username,password,email,gender,mobile) values ('$_POST[username]',
'$_POST[password]','$_POST[email]','$_POST[gender]','$_POST[mobile]')";



if(!mysql_query($sql,$conn))
{
die ('error:'.mysql_error());
}


header('Location:form.html');
mysql_close($conn);
?>
















