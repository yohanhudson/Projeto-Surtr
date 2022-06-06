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






-- //VERSÃO 2 BANCO DE DADOS


drop database Surtr;
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
(null, 'Alfred', 'alfred@gmail.com', 3, '1234'),
(null, 'Yohan', 'yohan@gmail.com', 1, '1234');


CREATE TABLE mods (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);


insert into mods values
(null, 'New Game is Plus'),
(null, 'Elden Ring Key Item Randomizer'),
(null, 'Invocação do Let me Solo Her'),
(null, 'NPCs e chefes como invocação'),
(null, 'Fire keeper to Ranni');

CREATE TABLE Curtida (
	fk_usuario int,
    foreign key (fk_usuario)
    references usuario(id),
    fk_mods int,
    foreign key (fk_mods)
    references mods(id),
    Curtidas boolean,
    primary key(fk_usuario, fk_mods)
);

insert into Curtida values (1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1);

INSERT INTO Curtida VALUES (5, 3, 1),
(4, 2, 1),
(2, 2, 1),
(3, 2, 1),
(5, 2, 1);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 


select * 
from usuario join Curtida on Curtida.fk_usuario = usuario.id
where fk_usuario = 1;