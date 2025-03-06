<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $question = htmlspecialchars($_POST['question']);

  // Set recipient email address
  $to = "felix777@gmail.com , cobby888@gmail.com ;

  // Set email subject
  $subject = "New Question from Church Bible Studies Platform";

  // Compose the email message
  $message = "Name: $name\n";
  $message .= "Email: $email\n";
  $message .= "Question:\n$question";

  // Set email headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    echo "<p>Thank you! Your question has been sent.</p>";
  } else {
    echo "<p>Sorry, there was an error sending your question. Please try again later.</p>";
  }
}
?>