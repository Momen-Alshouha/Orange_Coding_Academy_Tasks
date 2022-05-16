<?php 
    $host='localhost';
    $username='root';
    $password='';
    $db='resturant';

    $dsn = "mysql:host=$host;dbname=$db";

    $conn = new PDO($dsn,$username,$password);



?>