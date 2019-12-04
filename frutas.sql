-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2019 a las 09:49:05
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ahorcado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frutas`
--

CREATE TABLE IF NOT EXISTS `frutas` (
  `idnumero` varchar(3) COLLATE utf8_spanish_ci NOT NULL,
  `txtpalabra` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `frutas`
--

INSERT INTO `frutas` (`idnumero`, `txtpalabra`) VALUES
('1', 'MELON'),
('2', 'SANDIA'),
('3', 'MANGO'),
('4', 'CHABACANO'),
('5', 'PAPAYA'),
('6', 'UVA'),
('7', 'MISPERO'),
('8', 'TEJOCOTE'),
('9', 'PLATANO'),
('10', 'FRESA'),
('11', 'FRAMBUESA'),
('12', 'PIÑA'),
('13', 'COCO'),
('14', 'DURAZNO'),
('15', 'KIWI'),
('16', 'GUAYABA'),
('17', 'CIRUELA'),
('18', 'PASA'),
('19', 'ARANDANO'),
('20', 'CEREZA'),
('21', 'GRANADA'),
('22', 'HIGO'),
('23', 'MANZANA'),
('24', 'MARACUYA'),
('25', 'NARANJA'),
('26', 'PERA'),
('27', 'MANDARINA'),
('28', 'ARANDANO'),
('29', 'LIMA'),
('30', 'MAMEY');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
