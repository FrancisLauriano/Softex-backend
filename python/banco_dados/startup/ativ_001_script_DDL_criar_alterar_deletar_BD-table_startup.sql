#DDL - principais comando : CREATE, ALTER e DROP (comandos estruturais)
#criar e excluir banco de dados, criar tabelas, excluir tabelas, alterar tabelas e mais

#criar database (banco de dados) - CREATE DATABASE
create database startup;

#excluir banco de dados - DROP DATABASE
drop database startup;

#selecionar (usar) database - USE
use startup;

#criar tabela membros - CREATE TABLE
create table membros(
id_membro int auto_increment not null,
nome varchar(45) not null,
cargo varchar(45) not null,
primary key(id_membro)
);

#criar tabela tarefas com chave estrangeira - CREATE TABLE
create table tarefas(
id_tarefa int auto_increment not null,
descricao varchar(100) not null,
primary key(id_tarefa),
id_membro_fk int not null,
foreign key(id_membro_fk) references membros(id_membro)
);


#criar tabela tarefas sem chave estrangeira e adicionar chave estrageira posteriormente - CREATE TABLE
create table tarefas(
id_tarefa int auto_increment not null,
descricao varchar(45) not null,
primary key(id_tarefa)
);

#adicionar chave estrangeira a tabela tarefas criada anteriormente - ALTER TABLE / ADD COLUMN / ADD CONSTRAINT
alter table tarefas add column id_membro_fk int not null;
alter table tarefas add constraint id_membro_fk foreign key(id_membro_fk) references membros(id_membro);

#alterar tabela membros - ALTER TABLE / ADD COLUMN
alter table membros add column genero char(1);

#alterar tabela tarefas - ALTER TABLE / ADD COLUMN
alter table tarefas add column data_inicio date;
alter table tarefas add column data_finalizacao date;

#desativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=0;

#ativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=1;

#excluir tabela - DROP TABLE
drop table tarefas;
drop table membros;
