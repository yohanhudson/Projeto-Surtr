CREATE DATABASE Surtr;

USE Surt;


CREATE TABLE plataforma (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(45)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
    FK_plataforma int,
    foreign key (FK_plataforma)
    references plataforma(id),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

