-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 29, 2026 at 08:23 PM
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
-- Database: `portfolio_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `message`, `created_at`) VALUES
(1, 'Priyakhi', 'test@gmail.com', 'Hello from test.php', '2026-07-28 19:25:54'),
(2, 'Priyakhi Kakoti', 'priyakhikakoti@gmail.com', 'helloooooo', '2026-07-28 19:50:17'),
(3, 'Priyakhi Kakoti', 'priyakhikakoti@gmail.com', 'helloooooo', '2026-07-28 19:51:43'),
(4, 'Priyakhi Kakoti', 'priyakhikakoti@gmail.com', 'niceeee', '2026-07-28 19:51:59'),
(5, 'alishaa', 'alisha@gmail.com', 'nice work', '2026-07-28 19:56:01'),
(6, 'Priyakhi Kakoti', 'priyakhikakoti@gmail.com', 'portfolio', '2026-07-28 19:57:29'),
(7, 'Priyakhi Kakoti', 'priyakhikakoti@gmail.com', 'workingg', '2026-07-28 19:59:15'),
(8, 'Priyakhi Kakoti', 'priyakhikakoti@gmail.com', 'donee', '2026-07-28 20:03:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
