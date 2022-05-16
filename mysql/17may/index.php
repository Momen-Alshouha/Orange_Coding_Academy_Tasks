<?php 
    require 'config.php';
    $sql_category="SELECT * FROM category";
    $category_statment=$conn->prepare($sql_category);
    $category_statment->execute();
    $categories = $category_statment->fetchAll();


    if(!empty($_POST['name'])&&!empty($_POST['price'])&&!empty($_POST['category'])) {
        $meal_name=$_POST['name'];
        $meal_price=$_POST['price'];
        $meal_category=$_POST['category'];
        $sql_insert="INSERT INTO meals (meal_name,meal_price,meal_category) VALUES (?,?,?)";
        $statment2=$conn->prepare($sql_insert);
        $statment2->execute([$meal_name,$meal_price,$meal_category]);
    } 
?>

<?php 
    if(isset($_GET['delete'])) {
        $del_id=$_GET['delete'];
        $delete_sql="DELETE FROM meals WHERE meal_id = $del_id";
        $delete_statment=$conn->prepare($delete_sql);
        $delete_statment->execute();
        header('location:index.php');
    }

    if(isset($_GET['update'])){

    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Form</title>
</head>
<body>
    <form action="" method="post" style="width: 50% ; margin:auto ; padding-top:10px">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Meal Name</label>
          <input type="text" class="form-control" name="name">
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Price</label>
            <input type="number" step="0.01" min="0" class="form-control" name="price">
        </div>

        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Categories</label>
            <select name="category" class="form-select">
                <option selected disabled>Choose A Category </option>
                <?php foreach ($categories as $value): ?>
                <option value="<?php echo $value['category_id']; ?>"><?php echo $value['category_name']; ?></option>
                <?php endforeach?>
            </select>
        </div>
        <button type="submit" class="btn btn-primary" name="submit">Submit</button><br><br>
      </form>
    <div class="container fluid">
        <table class="table table-dark table-striped">
    <thead>
        <tr>
        <th class="align-middle text-center" scope="col">food name</th>
        <th class="align-middle text-center" scope="col">food price</th>
        <th class="align-middle text-center" scope="col">food category</th>
        <th class="align-middle text-center" scope="col">Action</th>
        </tr>
    </thead>
  <?php
          $sql_select = "
          SELECT meals.meal_id,meals.meal_name, meals.meal_price,category.category_name
          FROM meals
          LEFT JOIN category ON meals.meal_id = category.category_id;
          ";
          
         $stmt = $conn->prepare($sql_select);
         $stmt->execute();
          while($product = $stmt->fetch()){ ?>
            <tbody>
         <tr>
            <td class="align-middle text-center"><?php echo $product['meal_name']; ?></td>
            <td class="align-middle text-center"><?php echo $product['meal_price']; ?></td>
            <td class="align-middle text-center"><?php echo $product['category_name']; ?></td>
            <td class="align-middle text-center">
               <a href="update.php?edit=<?php echo $product['meal_id']; ?>" class="btn btn-primary"> <i class="fas fa-edit"></i> Edit </a>
               <a href="index.php?delete=<?php echo $product['meal_id']; ?>" class="btn btn-danger"> <i class="fas fa-trash"></i> Delete </a>
            </td>
         </tr>
         </tbody>
      <?php } ?>
      </div>
     
</body>
</html>