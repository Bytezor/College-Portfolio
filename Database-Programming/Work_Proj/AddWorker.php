<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Add Worker</title>
</head>
<body>
    <h2>Insert in to the Worker Table</h2>
    <form id="register" name="register" method="POST" action="<?php echo $PHP_SELF;?>" onsubmit="return true">
        Emp ID: <input type="text" id="empID" name="empID"><br>
        First Name: <input type="date" id="fireName" name="firstName"><br>
        Last Name: <input type="date" id="lastName" name="lastName"><br>
        Department Name: <input type="text" id="salary" name="salary"><br>
        Date Hired: <input type="date" id="hireDate" name="hireDate"><br>
        Birth Date: <input type="date" id="birthDate" name="birthDate"><br>
        Salary: <input type="text" id="salary" name="salary"><br>
        
    </form>

    <?php
    $db_location="localhost";
    $db_username="l11206378y";
    $db_password="GraVigA#4765";
    $db_database="l11206378y";

    $db_Connection=mysqli_connect("$db_location","$db_username","$db_password","$db_database") or die("The insert didn't work");

    $sql = "INSERT INTO Worker VALUES (
    NULL,'".
    $_POST['lastName']."','".
    $_POST['firstName']."','".
    $_POST['deptName']."','".
    $_POST['birthDate']."','".
    $_POST['hireDate']."','".
    $_POST['salary']."',";

    echo "The SQL this is going to do the INSERT: <br>".$sql."<br><br><br>";

    if($_POST['firstName']) !="" && ($_POST['lastName'] != "")
    {
        mysqli_query($db_Connection, $sql) or die("The insert did not work");
        echo "Looks like the insert worked<br><br>";
    }
    ?>

    <br><br><br><br>
    <a href="index.html">Back to Worker-Project Home</a>

</body>
</html>