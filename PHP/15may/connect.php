<?php 
    require 'config.php';
    mysqli_connect($host, $username, $password);
    $sql= 'CREATE DATABASE animal;';

    mysqli_query($link,$sql);

?>