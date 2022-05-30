<?php 
    require 'config.php';
    
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];

    $sql_insert="INSERT INTO data (name,age,email) VALUES ('$name','$age','$email')";

    $res = mysqli_query($conn,$sql_insert);
    
    if($res) {
        $result = ['done!'];
    } else {
        $result = ['error!'];
    }
    echo '<br>';
    echo json_encode($result);
    
    
?>