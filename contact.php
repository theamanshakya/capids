<?php
session_start();
if(!isset($_POST['cname'])){
    header("Location: index.php");
}
$servername = "localhost";
$username = "raahejxp_capids";
$password = "Incorect@00";
$dbname = "raahejxp_capids";
date_default_timezone_set('Asia/Kolkata');
$time = date("d-m-Y h:m:sa");
// echo $time ;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO contactus (cname, cemail, cphone, cmsg,clientIP, createdAt) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $cname, $cemail ,$cphone ,$cmsg , $clientIP ,$createdAt);

if (!empty($_SERVER['HTTP_CLIENT_IP']))   
  {
    $ip_address = $_SERVER['HTTP_CLIENT_IP'];
  }
//whether ip is from proxy
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))  
  {
    $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
//whether ip is from remote address
else
  {
    $ip_address = $_SERVER['REMOTE_ADDR'];
  }
// set parameters and execute
$cname =  htmlspecialchars($_POST['cname']);
$cemail =  htmlspecialchars($_POST['cemail']);
$cphone = htmlspecialchars($_POST['cphone']);
$cmsg = htmlspecialchars($_POST['cmessage']);
$clientIP = htmlspecialchars($ip_address);
$createdAt = htmlspecialchars($time);
echo "Processing......";
if($stmt->execute()){
    $_SESSION['msg'] = "Thank you for submitting your query.. We will contact you soon";
    // header("Location: index.php");
    echo "<script> window.location.assign('index.php')</script>";
} else {
    $_SESSION['msg'] = "Failed to send query call us on given numbers";
    // header("Location: index.php");
    echo "<script> window.location.assign('index.php')</script>";
}



$stmt->close();
$conn->close();
?>
