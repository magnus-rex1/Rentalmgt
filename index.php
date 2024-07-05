<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web App</title>
</head>

<body>
    <!-- <h1>Sample application</h1> -->
    <p>Your current date and time is
        <?php echo date('Y-m-d H:i:s'); ?>
    </p>
    <?php include('connect.php'); // Include the PHP script ?>
</body>

</html>
