CREATE database Loja;

use Loja;

CREATE table Produtos (
id_produto int unsigned not null auto_increment PRIMARY KEY,
nome_produto varchar(20) not null,
preco_unitario float not null,
quantidade_em_estoque int unsigned not null
);

INSERT INTO Produtos (nome_produto, preco_unitario, quantidade_em_estoque) VALUES 
("Smartphone", 799.99, 20),
("Tablet", 349.99, 10),
("Fone de Ouvido", 49.99, 50);

UPDATE Produtos 
SET preco_unitario = 849.99, quantidade_em_estoque = 25
WHERE nome_produto = 'Smartphone';

UPDATE Produtos
SET quantidade_em_estoque = quantidade_em_estoque -5
WHERE nome_produto = 'Tablet';

UPDATE Produtos
SET quantidade_em_estoque = quantidade_em_estoque -10
WHERE nome_produto = 'Fone de Ouvido';










