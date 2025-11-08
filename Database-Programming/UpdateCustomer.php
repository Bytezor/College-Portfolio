<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update a Customer</title>
</head>

<body>
   
    <?php
        $db_location = "localhost";
        $db_username = "l11206378y";
        $db_password = "GraVigA#4765";
        $db_database = "l11206378y_RepairShop";
        $db_Connection = mysqli_connect("$db_location", "$db_username", "$db_password", "$db_database") or die("Could not connect to the database");
    
        /* Make a drop down to show all the customers */
        echo "
        <form id='getData' method='POST'>";

        $result=mysqli_query($db_Connection, "SELECT * FROM Customer") or die("drop down query did not work");
        
        echo "
        <br>Select a customer to update:
        <select name='custID' id='custID'>
        <option value='----------'>-----------</option>";
        while ($row=mysqli_fetch_array($result)) 
        {
            echo "<option value='".$row["custID"]."'>".$row['firstName']." ".$row['lastName']."</option>";
        }
        echo "
        </select>
        <br><br>
        <input type='submit' value='Get the customer information'>
        </form>";
    ?>
    <br><br>
    <?php
    //** Now grab the data for the id that was selected above **/

    $sql ="SELECT * from Customer WHERE custID='".$_POST["custID"]."'";
    echo $sql;
    echo "<br><br>";
    $result=mysqli_query($db_Connection, $sql) or die("Get customer query didn't work");
    $row=mysqli_fetch_array($result);

    echo "
   
    <form id='update' name='update' method='POST' action='UpdateCustomer.php'>
    Customer ID: <input type='text' id='custID' name='custID' value='".$row['custID']."'><br>
    First Name: <input type='text' id=firstName name='firstName' value='".$row['firstName']."'><br>
    Last Name: <input type='text' id='lastName' name='lastName' value='".$row['lastName']."'><br>
    Address: <input type='text' id='address' name='address' value='".$row['address']."'><br>
    Phone Number: <input type='text' id='phone' name='phone' value='".$row['phone']."'><br>
    <br>
    <input type='submit' value='Update Customer'>
    
    </form>
    <br><br>
    ";
    ?>
    <?php

    
    if ($_POST['firstName'] != "") {



        /* Do update here using the data from the form above */
        $sql="UPDATE Customer SET 
        firstName = '".$_POST['firstName']."',
        lastName = '".$_POST['lastName']."',
        address = '".$_POST['address']."',
        phone = '".$_POST['phone']."'
        WHERE custID='".$_POST['custID']."';"
        ;

        echo "<br>The UPDATE SQL: <br>" . $sql . "<br><br>";

        mysqli_query($db_Connection, $sql) or die("The update did not work");
        echo "Looks like the update worked<br><br>";
        $_POST['firstName'] = "";
    }
    ?>

    <br><br>
    <a href="index.html">Back to Auto Repair Home</a>
    <br><br>
</body>

</html>