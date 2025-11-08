<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            </head>
            <body>
                <h1>Simple PHP Web Page</h1>

                <?php
                $db_location="localhost";
                $db_username="l11206378y";
                $db_password="GraVigA#4765";
                $db_database="l11206378y";

                $db_Connection=mysqli_connect("$db_location","$db_username","$db_password","$db_database") or die("could not connect to database");

                $students = mysqli_query($db_Connection, "SELECT * FROM Student") or die("The query didn't work");

                $numRecords = mysqli_num_rows($students);
                echo $numRecords." number of students<br><br>";

                echo "<table border='1'";
                echo "<tr>
                <th>ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Major</th>
                <th>Credits</th>
                </tr>";

                while($row = mysqli_fetch_array($students))
                {
                    echo "<tr>";
                    echo "<td>".$row["studID"]."</td>";
                    echo "<td>".$row["lastName"]."</td>";
                    echo "<td>".$row["firstName"]."</td>";
                    echo "<td>".$row["major"]."</td>";
                    echo "<td>".$row["credits"]."</td>";
                }

                mysqli_close($db_Connection);
                ?>

            </body>
            </html>