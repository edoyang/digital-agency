<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'edoyangz@gmail.com';
    $subject = 'New Contact Form Submission';
    $body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nMessage: $message";

    if(mail($to, $subject, $body)){
        echo "Mail Sent Successfully";
    }else{
        echo "Mail Sending Failed";
    }
}
?>