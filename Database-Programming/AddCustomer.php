<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Customer</title>

    <!-- <script>
        if (window.history.replaceState) {
            //window.history.replaceState(null, null, window.location.href);
        }
    </script> -->
</head>

<body>
    <a href="index.html">Back to Auto Repair Home</a>

    <br><br>
    <h2>Insert in to the Customer Table</h2>
    <form id="register" name="register" method="POST" action="<?php echo $PHP_SELF; ?>" onsubmit="return true">
        First Name: <input type="text" id="firstName" name="firstName"><br>
        Last Name: <input type="text" id="lastName" name="lastName"><br>
        Address: <input type="text" id="address" name="address"><br>
        Phone Number: <input type="text" id="phone" name="phone"><br>

        <br>
        <input type="submit" value="Add Customer">

    </form>

    <?php

    if ($_POST['firstName'] != "") {

        $db_location="localhost";
        $db_username="l11206378y";
        $db_password="GraVigA#4765";
        $db_database="l11206378y_RepairShop";

        $db_Connection = mysqli_connect("$db_location", "$db_username", "$db_password", "$db_database") or die("Could not connect to the database");

        $sql = "INSERT INTO Customer VALUES (
            NULL, '" .
            $_POST['firstName'] . "', '" .
            $_POST['lastName'] . "', '" .
            $_POST['address'] . "', '" .
            $_POST['phone'] . "')";

        echo "<br>The INSERT SQL: <br>" . $sql . "<br><br>";

        mysqli_query($db_Connection, $sql) or die("The insert did not work");
        echo "Looks like the insert worked<br><br>";
        $_POST['firstName'] = "";
    }
    ?>

    <br><br> 

</body>

</html>