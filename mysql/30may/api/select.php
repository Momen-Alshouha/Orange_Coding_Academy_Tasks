<?php 
    require 'config.php';

if ($conn){

    $sql="SELECT * FROM data";

    $result=mysqli_query($conn,$sql);

    if($result) {
     $arr=array();
        $i=0;

        while($row=mysqli_fetch_array($result)){

            $arr[$i]["id"]=$row["id"];
            $arr[$i]["name"]=$row["name"];
            $arr[$i]["age"]=$row["age"];
            $arr[$i]["email"]=$row["email"];
        $i++;
        }

       echo json_encode($arr);
    }

} else {
    echo "FAILED CONNECTING";
}