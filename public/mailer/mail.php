<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "nanaLit16@gmail.com";
// $admin_mail2 = "evn@creativecom.org";

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
//From email address and name
$mail->CharSet = 'utf-8';
$mail->From = "nanaLit16@gmail.com";
$mail->FromName = "Message from Miracreative";
//To address and name

$mail->addAddress($admin_mail);
// $mail->addAddress($admin_mail2);

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Message from Feedbackform";
$mail->Body = '
<p><i>Name</i> : <b>'.$_POST["name"].'</b></p>
<p><i>Phone number</i> : <b>'.$_POST["tel"].'</b></p>
<p><i>E-mail</i> : <b>'.$_POST["email"].'</b></p>
<p><i>Text</i> : <b>'.$_POST["text"].'</b></p>

<br/>
<sub>Send : '.date("d-m-Y H:i:s").'</sub>';
$mail->AltBody = 'Name : '.$_POST["name"].' | Phone number : '.$_POST["tel"].' | E-mail : '.$_POST["email"].' | ';

try {
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}