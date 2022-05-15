<?php 
    require 'connect.php';
 
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
    <form method="POST" action="connect.php">
        <fieldset>
    <legend>Animal Form</legend>
            <label for="">Animal Name: </label>
            <input type="text" name="name"> <br><br>

            <label for="">Animal Sound: </label>
            <input type="text" name="sound"> <br><br>

            <label for="">Animal Age: </label>
            <input type="text" name="age"> <br><br>

            <label for="">Animal nickname: </label>
            <input type="text" name="nickname"> <br><br>

            <input type="submit" value="Submit" name="submit">
        </fieldset>
    </form>

    <?php 
     $sql_select ="SELECT * FROM animals";
     $result = mysqli_query($link,$sql_select);
     
     if(mysqli_num_rows($result) > 0) {
        echo "<table>";
        echo "<tr>";
            echo "<th>animal name</th>";
            echo "<th>animal sound</th>";
            echo "<th>animal age</th>";
            echo "<th>animal nickname</th>";
        echo "</tr>";
    while($row = mysqli_fetch_array($result)){
        echo "<tr>";
            echo "<td>" . $row['animal_name'] . "</td>";
            echo "<td>" . $row['animal_sound'] . "</td>";
            echo "<td>" . $row['animal_age'] . "</td>";
            echo "<td>" . $row['animal_nickname'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
     }
    
    ?>

</table>
</body>
</html>