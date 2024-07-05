<?php

// Database credentials (replace with your actual details)
$host = "localhost";
$db_name = "your_database_name";
$username = "your_username";
$password = "your_password";

// Connect to the database
try {
  $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected to database successfully!";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

// (Optional) Perform a simple query (replace with your desired query)
$sql = "SELECT * FROM users";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll();

// (Optional) Process the query results (example: print usernames)
if(count($result) > 0) {
  echo "<br> Usernames: <br>";
  foreach($result as $row) {
    echo "- " . $row["username"] . "<br>";
  }
} else {
  echo "<br> No users found.";
}

$conn = null; // Close the connection

?>
