<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="description" content="This is where I practice HTML, CSS, JavaScript, JQuery, PHP, XML, Database excercises and much more.">
<meta name="keywords" content="Brad Neumann learning, college graduate continuing practice, udemy 2020 web development bootcamp, Dr Angela, App Brewery, HTML, CSS, JavaScript, JQuery, PHP, XML, Database excercises">
<meta name="author" content="Brad Neumann">
<link rel="icon" href="img/bnfavicon.png">
<title>Brad Neumann</title>
<script src="https://kit.fontawesome.com/202252364c.js" crossorigin="anonymous"></script>
<link href="https://cdnjs.cloudfare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="main.css" rel="stylesheet" type="text/css">
</head>
<body>

		<div class="center-text">
	<section class="contact">
  <div class="container">



<?php

$name = $_POST['name'];
$selected_val = $_POST['services'];
$email = $_POST['email'];

echo "Hello " . $name . "<br />";

echo "We have recieved your request for information regarding " . $selected_val . "<br />";

echo "We will be in contact soon using your email, " . $email . "<br />";


?>

		<div>

<a href="http://sotd.us/bradneumann/bradneumann/" class="btn home-btn">Back home</a></div>

		</div></section></div>

<script src="https://unpkg.com/scrollreveal"></script>
<script src="main.js"></script>
<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

</body>
</html>
