 <?php
session_start();

$host="localhost";
$user="root";
$pass="root";
$con = mysql_connect("$host","$user","$pass");
if (!$con)

  {

echo "Error in DBConnect() = " . mssql_get_last_message();
  die('Could not connect: ' . mysql_error());

  }
mysql_select_db("workshop", $con);
$name=$_POST['username'];
$password=$_POST['password'];



 $mysql = "SELECT * FROM register WHERE username='$name' and password='$password' ";

 $result = mysql_query($mysql) or die("cannot execute query");

 $count = mysql_num_rows($result);
	$row= mysql_fetch_array($result);

  $_SESSION['id'] = $row['id'];
 if($count==1)
  {
	header("location:admin.php"); // put your home page name here
}

 else
{
	
$msg = "You left one or more of the required fields.";
    echo $msg;
    header("location:login.php");


}

 ?>
