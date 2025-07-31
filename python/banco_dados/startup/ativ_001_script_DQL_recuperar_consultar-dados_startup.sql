#DQL - principais comando: SELECT (comandos focados em consultas de dados)
#recuperar dados e fazer a leitura ou manipulação deles
#usar SELECT com WHERE (especifica os critérios da consulta) / ORDER BY (ordenar a consulta) / INNER JOIN (junção de duas ou mais tabelas) / HAVING (filtrar grupos) / GROUP BY (agrupar dados)
#GROUP BY é comumente utilizado em conjunto com funções de agregação - COUNT (contar), SUM (somar), AVG (media), MIN (minimo), e MAX (maximo)

#seleciona banco de dados - USE
use startup;

#recuperar dados da tabela membros - SELECT FROM
select * from membros;
select nome from membros;

#recuperar dados da tabela tarefas - SELECT FROM / WHERE (especificar o "valor" da pesquisa)
select * from tarefas;
select * from membros where genero="F";
select nome from membros where genero="F";
select * from membros where nome like '%silva';

#recuperar dados da tabela ordenado de forma ascendente ou decrescente - SELECT FROM / ORDER BY 
#por padrão, ordena de forma crescente - ASC. Para ordernar de forma descrecente usar DESC
select * from tarefas 
order by descricao;

select * from membros
order by nome desc;

#recuparar dados ligado as tabelas membros e tarefas - SELECT FROM / INNER JOIN (junção de duas ou mais tabelas)
select membros.nome, tarefas.descricao
from membros
inner join tarefas
ON membros.id_membro = tarefas.id_membro_fk;

#exibir o nome, cargo, descrição da tarefa, data inicial e data final - SELECT FROM / INNER JOIN (junção de duas ou mais tabelas)
select membros.nome, membros.cargo, tarefas.descricao, tarefas.data_inicio, tarefas.data_finalizacao
from membros
inner join tarefas
ON membros.id_membro = tarefas.id_membro_fk;

#exibir quais os cargos existe na tabela membros - SELECT FROM /  GROUP BY
select cargo
from membros
group by cargo;

#exibir quantos membros do genero feminino tem na tabela membros - SELECT FROM / WHERE / COUNT
select count(*) AS QTD_mulheres
from membros
where genero = 'F';



