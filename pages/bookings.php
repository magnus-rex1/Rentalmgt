<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rental_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Variable to store the success message
$success_message = "";

// If form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $booker_name = $_POST["booker_name"];
    $location = $_POST["location"];
$booker_contact = $_POST["booker_contact"];

   
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO bookings (booker_name, location, booker_contact) VALUES (?, ?, ?)");
        if ($stmt === false) {
            die("Failed to prepare statement: " . $conn->error);
        }

        $null = NULL; // Used for handling BLOB data
        $stmt->bind_param("sss", $booker_name, $location, $booker_contact);

        // Execute the query
        if ($stmt->execute()) {
            $success_message = "Your booking has been submitted successfully";
        } else {
            $success_message = "Error: " . $stmt->error;
        }

        $stmt->close();
    } 
    $conn->close();
?>

<!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add New Tenants - UrbanRent</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../assets/css/tailwind.output.css" />
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    <script src="../assets/js/init-alpine.js"></script>
    <style>
        .fade-out {
            opacity: 1;
            transition: opacity 7s ease-out;
        }
        .fade-out.fade {
            opacity: 0;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const messageDiv = document.getElementById('message');
            if (messageDiv) {
                setTimeout(function () {
                    messageDiv.classList.add('fade');
                }, 2000); // Wait 2 seconds before starting the fade
            }
        });
    </script>
</head>
<body>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="../assets/img/create-account-office.jpeg" alt="Office" />
                    <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src="../assets/img/create-account-office-dark.jpeg" alt="Office" />
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Add New Tenants
                        </h1>
                        <?php if ($success_message != ""): ?>
                            <div id="message" class="fade-out">
                                <?php echo $success_message; ?>
                            </div>
                        <?php endif; ?>
<form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" enctype="multipart/form-data">
    <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Your Name</span>
        <input
            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            name="booker_name"
            placeholder="Jane Doe"
            required
        />
    </label>
    <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Your Contact</span>
        <input
            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder=""
            name="booker_contact"
            type="text"
            required
        />
    </label>
 <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Your Preferred Location</span>
        <input
            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="Kikoni"
            name="location"
            type="text"
            required
        />
    </label>

    <button
        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        type="submit"
    >
        Upload
    </button>
</form>


                        <p class="mt-4">
                            <a class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" href="./login.html">
                                Wanna Manage Tenants? Do it Here 
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>