CREATE database Livraria;

USE Livraria;

CREATE table Autores (
autorID INT unsigned Not Null auto_increment,
nome varchar(60) Not Null,
nacionalidade varchar (20) Not Null,
PRIMARY KEY (autorID)
);

CREATE table Livros ( 
livroID INT unsigned Not Null auto_increment,
titulo varchar(60) Not Null,
anoPublicacao INT Not Null,
autor_ID INT unsigned Not Null,
PRIMARY KEY (livroID),
FOREIGN KEY (autor_ID) REFERENCES Autores(autorID)
);

INSERT INTO Autores (nome, nacionalidade) VALUES
("JK Rowling", "Inglesa"),
("Clarice Lispector", "Brasileira"),
("Djamila Ribeiro", "Brasileira"),
("Cecília Meireles", "Brasileira");

INSERT INTO Livros (titulo, anoPublicacao, autor_ID) VALUES 
("Harry Potter e a Pedra Filosofal", 1997, 1),
("Harry Potter e o Prisioneiro de Azkaban", 1999, 1 ),
("Pequeno Manual Antirracista", 2019, 3),
("Quem tem medo do feminismo negro?", 2018, 3),
("A Hora da Estrela", 1977, 2);

SELECT Autores.nome, Livros.titulo
FROM Autores, Livros
WHERE Autores.autorID=Livros.autor_ID
ORDER BY Autores.nome ASC;

SELECT Livros.titulo, Livros.anoPublicacao, Autores.nome 
FROM Livros INNER JOIN Autores 
ON Livros.autor_ID=Autores.autorID;

SELECT Autores.nome, Autores.nacionalidade, Livros.titulo, Livros.anoPublicacao
FROM Autores LEFT JOIN Livros
ON Autores.autorID=Livros.autor_ID;

SELECT Livros.titulo, Livros.anoPublicacao, Autores.nome, Autores.nacionalidade 
FROM Livros INNER JOIN Autores 
ON Livros.autor_ID=Autores.autorID
WHERE Autores.nacionalidade="Brasileira";

SELECT Autores.nome, COUNT(Livros.autor_ID) AS QtdLivrosPublicados
FROM Autores LEFT JOIN Livros
ON Autores.autorID=Livros.autor_ID
GROUP BY Autores.nome;



