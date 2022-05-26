CREATE DATABASE Surtr;

USE Surtr;


CREATE TABLE plataforma (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(45)
);

insert into plataforma values (null, 'PC'),
(null, 'Playstation'),
(null, 'XBOX');

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




insert into usuario values (null, 'matheus', 'matheus@gmail.com', 1, '1234'),
(null, 'rizzeto', 'rizzeto@gmail.com', 1, '1234'),
(null, 'Nicky', 'nicky@gmail.com', 1, '1234'),
(null, 'Renata', 'renata@gmail.com', 1, '1234'),
(null, 'Morgana', 'morgana@gmail.com', 1, '1234'),
(null, 'Jessica', 'jessica@gmail.com', 1, '1234'),
(null, 'Roberto', 'roberto@gmail.com', 1, '1234'),
(null, 'Maria', 'maria@gmail.com', 2, '1234'),
(null, 'Lunna', 'lunna@gmail.com', 2, '1234'),
(null, 'Guilherme', 'guilherme@gmail.com', 2, '1234'),
(null, 'Gabriel', 'gabriel@gmail.com', 2, '1234'),
(null, 'Camila', 'camilas@gmail.com', 3, '1234'),
(null, 'Alfred', 'alfred@gmail.com', 3, '1234');