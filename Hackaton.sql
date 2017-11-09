-- MySQL Script generated by MySQL Workbench
-- jeu. 09 nov. 2017 18:16:37 CET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Hackaton
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Hackaton
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Hackaton` DEFAULT CHARACTER SET latin1 ;
USE `Hackaton` ;

-- -----------------------------------------------------
-- Table `Hackaton`.`Personnes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Hackaton`.`Personnes` (
  `idPersonnes` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `firstname` VARCHAR(45) NULL DEFAULT NULL,
  `birthday` DATE NULL DEFAULT NULL,
  `city` VARCHAR(100) NULL DEFAULT NULL,
  `code` INT(11) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idPersonnes`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
