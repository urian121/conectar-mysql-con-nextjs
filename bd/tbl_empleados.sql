-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2024 a las 21:23:15
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_handsontable`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_empleados`
--

CREATE TABLE `tbl_empleados` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `cedula` varchar(255) DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_empleados`
--

INSERT INTO `tbl_empleados` (`id`, `nombre`, `edad`, `cedula`, `sexo`, `telefono`, `cargo`, `created_at`) VALUES
(1, 'Brenda', 18, '212140', 'Femenino', '52225', 'Desarrollador Web', '2024-04-01 23:43:05'),
(2, 'Braudin', 41, '434444', 'Masculino', '122222', 'Desarrollador FrontEnd', '2024-04-01 23:54:00'),
(3, 'Mario', 25, '543509', 'Masculino', '345454', 'Desarrollador Web', '2024-04-02 15:31:08'),
(4, 'Carlos', 28, '233300', 'Femenino', '414144', 'Desarrollador BackEnd', '2024-04-02 15:33:39'),
(5, 'Uriany', 22, '432445', 'Masculino', '234455', 'Desarrollador Web', '2024-04-02 15:35:36'),
(6, 'Felipe', 28, '233322', 'Femenino', '414166', 'Desarrollador BackEnd', '2024-04-06 20:59:30'),
(7, 'Deyna Castellano', 25, '233311', 'Masculino', '414177', 'Desarrollador BackEnd', '2024-04-06 21:01:21'),
(8, 'Sofia', 23, '545341', 'Femenino', '233377', 'Administración', '2024-05-31 13:34:21'),
(9, 'Valentina', 45, '122226', 'Femenino', '334444', 'Front-end', '2024-05-31 13:37:06'),
(10, 'Santiago', 34, '343446', 'Masculino', '232222', 'Developer', '2024-05-31 13:37:06'),
(11, 'Mateo', 27, '454560', 'Masculino', '111233', 'Back-end', '2024-05-31 13:37:06'),
(12, 'Sebastian', 48, '756766', 'Masculino', '234555', 'Full-Stack', '2024-05-31 13:37:06'),
(29, 'Martin', 23, '677770', 'Masculino', '323213', 'Desarrollador Web', '2024-05-31 14:11:26'),
(30, 'Diego', 40, '900090', 'Masculino', '342343', 'Desarrollador Web', '2024-05-31 14:11:26'),
(31, 'Fabian', 32, '534543', 'Masculino', '344444', 'Developer', '2024-05-31 14:11:26'),
(32, 'Alejando', 30, '423222', 'Masculino', '345354', 'Full-Stack', '2024-05-31 14:11:26'),
(33, 'Any', 36, '670088', 'Femenino', '445555', 'Administración', '2024-05-31 14:11:26'),
(34, 'Camilo', 28, '233232', 'Masculino', '422234', 'Full-Stack', '2024-05-31 14:11:26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_empleados`
--
ALTER TABLE `tbl_empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_empleados`
--
ALTER TABLE `tbl_empleados`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
