<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Program</title>
</head>
<body>
   <!-- 1 -->
   <?php 
   $colors = array('white', 'green', 'red','white', 'green', 'red','white', 'green', 'red');
   echo "<ul>";
    for($i=0; $i<count($colors); $i++){
        echo '<li>';
        echo $colors[$i];
        echo '</li>';

    }
   echo "</ul>";
   ?>
   
   <hr>
    <!-- 2 -->
   <?php 
   $cities= array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=> "Brussels", "Denmark"=>"Copenhagen", "Finland"=>"Helsinki", "France" => "Paris", "Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana", "Germany" => "Berlin", "Greece" => "Athens", "Ireland"=>"Dublin", "Netherlands"=>"Amsterdam", "Portugal"=>"Lisbon", "Spain"=>"Madrid" ); 

   sort($cities);
  

   foreach($cities as $key => $value){
    echo 'The capital of ' . $key .' is '. $value . '</br>';
   }
   
   ?>
   <hr>
   <!-- 3 -->
   <?php
   $color = array (4 => 'white', 6 => 'green', 11=> 'red'); 
   echo $color[4];
   ?>
   <hr>

   <!-- 4 -->
   <?php
   
    $fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");

    krsort($fruits);

    foreach($fruits as $key => $value) {
        echo $key . ' = ' . $value . '<br>';
    }

   ?>
</body>
</html>