<?php 
    require 'config.php';
    $sql_select = "SELECT * FROM data";
    $result = mysqli_query($conn,$sql_select);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if($result = mysqli_query($conn, $sql_select)){
        if(mysqli_num_rows($result) > 0){
            echo "<table>";
                echo "<tr>";
                    echo "<th>id</th>";
                    echo "<th>name</th>";
                    echo "<th>age</th>";
                    echo "<th>email</th>";
                echo "</tr>";
            while($row = mysqli_fetch_array($result)){
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['name'] . "</td>";
                    echo "<td>" . $row['age'] . "</td>";
                    echo "<td>" . $row['email'] . "</td>";
                echo "</tr>";
            }
            echo "</table><br>"; 
        }
    }
        
    ?>
    <form action="update.php" method="POST">
            <input type="text" name="id" id="" placeholder="id"><br>
            <input type="text" name="name" id="" placeholder="name"><br>
            <input type="number" name="age" id="" placeholder="age"><br>
            <input type="email" name="email" id="" placeholder="email"><br>
            <input name='submit' type="submit" value="update">
    </form><br><br>

    <?php 
       

        if(isset($_POST['submit'])){
            $id = $_POST['id'];
            $name = $_POST['name'];
            $age = $_POST['age'];
            $email = $_POST['email'];
            $sql_update = "UPDATE data SET name='$name', age='$age',email='$email' WHERE id = '$id'";
            
            mysqli_query($conn,$sql_update);
            echo "<script>window.location.href='update.php'</script>";
        }
    ?>

</body>
</html>