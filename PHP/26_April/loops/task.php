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
    $sum=0;
    for($counter=0; $counter<=30; $counter++){
        $sum+=$counter;
    }
    echo $sum . '<br>';
    ?>
    <hr>
    
    <!-- 4 -->

   <!-- 
        1 0 0 0 0 
        0 2 0 0 0 
        0 0 3 0 0 
        0 0 0 4 0 
        0 0 0 0 5
    -->
    <?php 
    for($i=1; $i<=5; $i++){
        for($j=1;$j<=5; $j++){
            if($i==$j){
                echo $i . " ";
            }
            else 
            echo 0 . " ";
        }
        echo '<br>';
    }
    ?>
    <hr>

    <!-- 5 -->
    <?php 
        $number = 5;
        $fac=1;
        while($number>1) {
            $fac *=$number;
            $number--;
        }
        echo $fac;
    ?>
    <hr>
    <!-- 6 fiboncai series -->
    <?php 
        $a=0;
        $b=1;
        $c=0;
        $counter=1;
        echo $a . " " . $b . " ";
        while($counter<=10) {
            $c=$a+$b;
            echo $c . " ";
            $a=$b;
            $b=$c;
            $counter++;
        }
    ?>
    <hr>
    <!-- 9 -->
    <!-- 
        1
        2 3
        4 5 6
        7 8 9 10
        11 12 13 14 15
     -->
    <?php 
    $n=1;
    for($i=1; $i<=5; $i++) {
        for($j=1; $j<=$i; $j++){
            echo $n++ . " ";
        }
        echo '<br>';
    }
    ?>
</body>
</html>