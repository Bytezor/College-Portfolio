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
        Name: <input type="text" id="name" name="name"><br>
        Date Hired: <input type="date" id="hireDate" name="hireDate"><br>
        Birth Date: <input type="date" id="birthDate" name="birthDate"><br>
        Salary: <input type="text" id="salary" name="salary"><br>
        
    </form>
</body>
</html>