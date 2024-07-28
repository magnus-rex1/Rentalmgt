-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2024 at 01:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `booker_id` int(5) NOT NULL,
  `booker_name` varchar(50) NOT NULL,
  `booker_contact` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booker_id`, `booker_name`, `booker_contact`, `location`, `date_added`, `status`) VALUES
(1, 'Kikonyogo', '00990-9', 'nebbi', '2024-07-21 14:43:53', 'Pending'),
(3, 'One Kiss', '(7766555', 'Back Breaker', '2024-07-21 22:02:05', 'Settled'),
(4, 'The Top Bro', '0772169960', 'Hawaii', '2024-07-21 22:02:37', 'Pending'),
(6, 'World', '+1 33670922', 'Florida', '2024-07-21 23:29:31', 'Settled'),
(7, 'Joe Dean', '003327273', '338272736', '2024-07-21 23:29:48', 'Settled'),
(9, 'Whats that', '(7766555', 'Whales', '2024-07-21 23:38:08', 'Pending'),
(11, 'Whats that', '(7766555', 'Whales', '2024-07-22 00:05:36', 'Settled');

-- --------------------------------------------------------

--
-- Table structure for table `rentals`
--

CREATE TABLE `rentals` (
  `rental_id` int(5) NOT NULL,
  `rental_name` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `total_rooms` int(3) NOT NULL,
  `empty_rooms` int(3) NOT NULL,
  `owner_name` varchar(100) NOT NULL,
  `owner_contact` text NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_general_ci;

--
-- Dumping data for table `rentals`
--

INSERT INTO `rentals` (`rental_id`, `rental_name`, `location`, `total_rooms`, `empty_rooms`, `owner_name`, `owner_contact`, `date_added`) VALUES
(1, '0', 'Pakwach, Sudan', 136, 17, 'Mzee', '0776985111', '2024-07-11 19:12:33'),
(2, '0', 'Back Breaker', 20, 12, 'Put Me in Ur Dairy', '0776985111', '2024-07-11 19:13:08'),
(3, 'Tell Me why ', 'do me so', 3, 0, 'In ma Life', '0776985111', '2024-07-11 19:15:18'),
(4, 'See i fot all ', 'One number', 16, 3, 'Joe', '0776985111', '2024-07-11 19:19:01'),
(5, 'See i fot all ', 'One number', 10, 4, 'Joe', '0776985111', '2024-07-11 19:19:52'),
(6, 'sdd', 'dd', 15, 4, 'fff', 'dww', '2024-07-11 19:20:08'),
(7, 'Mura', 'S. Sudan', 45, 13, 'Nakamura', '0776968633', '2024-07-28 14:35:05'),
(8, 'Mura', 'S. Sudan', 45, 13, 'Nakamura', '0776968633', '2024-07-28 14:36:39'),
(9, 'Emirates', 'Bugolobi', 4, 2, 'Kizito', '0887766221', '2024-07-28 14:50:55');

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `tenant_id` int(5) NOT NULL,
  `tenant_name` varchar(100) NOT NULL,
  `rental` varchar(50) NOT NULL,
  `departs` date NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_general_ci;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`tenant_id`, `tenant_name`, `rental`, `departs`, `date_added`) VALUES
(1, 'Darius', '0', '0000-00-00', '2024-07-11 18:44:06'),
(2, 'Wayne', '0', '0000-00-00', '2024-07-11 18:48:01'),
(3, 'Owemba', '0', '2024-08-24', '2024-07-11 18:53:05'),
(4, 'Pretty Girl', '0', '6678-06-05', '2024-07-11 19:21:23'),
(5, 'Katrina', 'Never Broke', '2024-07-31', '2024-07-21 01:52:01'),
(6, 'Nesta', 'Shalom', '2024-08-10', '2024-07-28 14:45:28'),
(7, 'Douglas', 'Shalom', '2024-08-10', '2024-07-28 14:47:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'ojoh'),
(2, 'oscar', 'dosantos');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booker_id`);

--
-- Indexes for table `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`rental_id`);

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`tenant_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booker_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `rentals`
--
ALTER TABLE `rentals`
  MODIFY `rental_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tenants`
--
ALTER TABLE `tenants`
  MODIFY `tenant_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
