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
    echo 'Reverse String Exercise' . '<br><br>';
    $str = "example" ;
    echo "String : " . $str . '<br>';
    echo "Reversed String : " . strrev($str) . '<br>';
    ?>
    <hr>
    <!-- 2 -->
    <?php 
     echo 'Prime Number Exercise' . '<br><br>';
    $number = 7;
    $counter = 0;
    for($i=2; $i<$number; $i++){
        if($number%$i==0) {
            $counter++;
            break;
        }
    }
    if($counter!=0 || $number==1)
    echo $number . "Is Not Prime! <br>";

    else 
    echo $number . " Is Prime! <br>";
    ?>
    <hr>
    <!-- 3 -->
    <?php
    echo 'Uppper or lower case string' . '<br><br>';
    $str="REMO";
    $is_ok = true;
    for($i=0; $i<strlen($str); $i++) {
       
        if($str[$i] >= 'A' && $str[$i] <= 'Z')
       { 
           $is_ok= false;
            break;
        }
    }
    if($is_ok){
        echo $str . " is ok.";
    }
    else {
        echo $str . " is not ok.";
    }
    ?>
    <hr>
    <!-- 4 -->
    <?php 
     echo 'Swap variables' . '<br><br>';
     function swap(&$num1, &$num2) {
        $temp=$num1;
        $num1=$num2;
        $num2=$temp;
     }
     $n1 =10 ;
         $n2=20;
     echo 'Before Swap:' . '<br>';
     echo $n1 . " " . $n2 . '<br>';
     echo 'After Swap:' . '<br>';
     swap($n1,$n2);
     echo $n1 . " " . $n2 . '<br>';

    ?>
<hr>
<?php 
    echo 'Armstrong number or not' . '<br><br>';
     $num=407;
     $temp=$num;
     $sum=0;
     $reminder;
     while($num>0) {
        $reminder=$num%10;
        $sum+=$reminder*$reminder*$reminder;
        $num /=10;
     }
     if($sum ==$temp) {
         echo $temp . " is arm.";
     }
     else {
        echo $temp . " is not arm.";
     }
?>
<hr>
<?php 
    echo "is palindrome or not ! <br><br>";
    $str='racecar';
    if($str==strrev($str)) {
        echo $str . " is palindrome!";
    }
    else {
        echo $str . " is not palindrome!";
    }


?>

<hr>
<?php
    echo "Remove duplicates ! <br><br>";
    $array = array(2, 4, 7, 4, 8, 4);
    $newArray = array_unique($array);
    echo '<pre>';
    print_r($array);
    echo '<pre>';
    print_r($newArray);

?>
    

</body>
</html>