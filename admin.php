<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "workshop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM register";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "username: ->" . $row["username"]. " -password:->" . $row["password"]. "-email:->".  $row["email"]."-gender:->".$row["gender"]."-mobile:->".$row["mobile"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
