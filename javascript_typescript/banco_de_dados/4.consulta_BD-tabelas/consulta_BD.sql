CREATE database Techdata;

USE Techdata;

CREATE table Transacoes (
cod_Transacao int unsigned not null auto_increment PRIMARY KEY,
produto varchar(10) not null,
data datetime not null,
valor decimal (10,2) not null
);

INSERT INTO Transacoes (produto, data, valor) VALUES 
('A','2023-12-04 18:30:00', 300.00),
('B', '2023-10-04 18:30:00', 50.00),
('A','2023-10-04 18:30:00', 400.00),
('B','2023-12-04 18:30:00', 100.00);

SELECT * FROM Transacoes;

SELECT 
cod_Transacao AS ID_Transacao, 
data AS data_Transacao,
valor AS valor_Transacao
FROM Transacoes;

SELECT * FROM Transacoes
WHERE valor > 100.00;

SELECT * FROM Transacoes ORDER BY valor DESC;

SELECT AVG(valor) AS valor_medio_transacoes FROM Transacoes;

SELECT MAX(valor) AS valor_maximo_transacoes FROM Transacoes;

SELECT MIN(valor) AS valor_minimo_transacoes FROM Transacoes;

SELECT COUNT(*) AS quantidade_total_transacoes FROM Transacoes;

SELECT produto, AVG(valor) AS media_valor_transacoes_produto FROM Transacoes GROUP BY produto;

SELECT produto, 
COUNT(cod_Transacao) AS quantidade_total_transacoes_produto, 
SUM(valor) AS valor_total_transacoes_produto, 
AVG(valor) AS media_valor_transacoes_produto
FROM Transacoes
GROUP BY produto;









