create database Surtr;
use Surtr;


CREATE TABLE plataforma (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(45)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
    FK_Plataforma int,
    foreign key (FK_Plataforma)
    references plataforma(id),
	senha VARCHAR(12)
);

CREATE TABLE comentario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 




