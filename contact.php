<?php
if (isset($_POST['name'])) {
  header("Location: https://theamanshakya.github.io/capids/");
  die();
}
echo "Processing";
$to = "theamanshakya@gmail.com";
$subject = "Contact Mail";

$message = "
<html>
<head>
<title>Contact Mail</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";

mail($to,$subject,$message,$headers);
?>