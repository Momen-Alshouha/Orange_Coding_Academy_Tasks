<?php 
    require 'config.php';

    $link = mysqli_connect($host, $username, $password,$db);

    $update_statment = "UPDATE `animals` SET `animal_name` = 'birdt', `animal_sound` = 'bird sound', `animal_nickname` = 'birr' WHERE `animals`.`animal_id` = 1 ";
    
    if(isset($_POST['submit'])) {
        $animal_name=$_POST["name"];
        $animal_age=$_POST["age"];
        $animal_nickname=$_POST["nickname"];
        $animal_sound=$_POST["sound"];
       
        $statment ="INSERT INTO animals(animal_name,animal_sound,animal_age,animal_nickname) VALUES ('$animal_name','$animal_sound','$animal_age','$animal_nickname')";
       
        mysqli_query($link,$statment);
        echo 'New Record Added!';
    }
    else {
        echo mysqli_error($link);
    }

    mysqli_query($link,$update_statment);



?>
