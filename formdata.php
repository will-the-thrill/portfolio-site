<?php
function check_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$yourname = check_input($_POST['name']);
$email    = check_input($_POST['email']);
$phone   = check_input($_POST['phone']);
$info	 = check_input($_POST['info']);

$recipient = "will@williamschneller.com";
$subject   = $yourname;
$message   = " $phone   $info";

mail($recipient, $subject, $message);

header('Location: index.html');
exit();

?>