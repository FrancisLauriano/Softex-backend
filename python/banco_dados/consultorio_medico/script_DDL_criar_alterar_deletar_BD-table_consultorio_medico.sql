#criar database (banco de dados) - CREATE DATABASE
create database consultorio_medico;

#selecionar (usar) database - USE
use consultorio_medico;

#excluir banco de dados - DROP DATABASE
drop database consultorio_medico;

#criar tabela Medicos - CREATE TABLE
create table Medicos(
id_medico int not null auto_increment primary key,
crm char(15) not null unique,
cpf char(14) not null unique,
nome varchar(100) not null,
especialidade varchar(45) not null,
genero char(15)
);

#criar tabela Juridicos - CREATE TABLE
create table Juridicos(
id_juridico int not null auto_increment primary key,
cnpj char(18) not null,
razao_social varchar(100) not null,
fk_id_medico int not null,
foreign key(fk_id_medico) references Medicos(id_medico)
);

#criar tabela Pacientes - CREATE TABLE
create table Pacientes(
id_paciente int not null auto_increment primary key,
nome varchar(100) not null,
cpf char(14) not null unique,
data_nascimento date not null,
genero char(15)
);

#criar tabela Enderecos - CREATE TABLE
create table Enderecos(
id_endereco int not null auto_increment primary key,
logradouro varchar(60) not null,
bairro varchar(45) not null,
numero int not null,
complemento varchar(45),
cep char(10) not null,
municipio varchar(50) not null,
uf varchar(45) not null,
pais varchar(45) not null,
fk_id_medico int,
fk_id_paciente int,
foreign key(fk_id_medico) references Medicos(id_medico),
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);

#criar tabela Telefones - CREATE TABLE
create table Telefones(
id_telefone int not null auto_increment primary key,
celular_1 char(14) not null,
celular_2 char(14),
residencial char(13),
fk_id_medico int,
fk_id_paciente int,
foreign key(fk_id_medico) references Medicos(id_medico),
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);

#criar tabela Prontuarios - CREATE TABLE
create table Prontuarios(
id_prontuario int not null auto_increment primary key,
historico_saude varchar(500) not null,
observacao varchar(200),
fk_id_paciente int not null,
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);

#criar tabela Medicacoes - CREATE TABLE
create table Medicacoes(
id_medicacao int not null auto_increment primary key,
medicamento_1 varchar(45) not null,
medicamento_2 varchar(45),
medicamento_3 varchar(45),
medicamento_4 varchar(45),
medicamento_5 varchar(45),
fk_id_prontuario int not null,
fk_id_paciente int not null,
foreign key(fk_id_prontuario) references Prontuarios(id_prontuario),
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);

#criar tabela Diagnosticos - CREATE TABLE
create table Diagnosticos(
id_diagnostico int not null auto_increment primary key,
diagnostico_1 varchar(45) not null,
diagnostico_2 varchar(45),
diagnostico_3 varchar(45),
diagnostico_4 varchar(45),
diagnostico_5 varchar(45),
fk_id_prontuario int not null,
fk_id_paciente int not null,
foreign key(fk_id_prontuario) references Prontuarios(id_prontuario),
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);

#criar tabela Consultas - CREATE TABLE
create table Consultas(
id_consulta int not null auto_increment primary key,
data date not null,
hora time not null,
fk_id_medico int not null,
fk_id_paciente int not null,
fk_id_prontuario int not null,
foreign key(fk_id_medico) references Medicos(id_medico),
foreign key(fk_id_paciente) references Pacientes(id_paciente),
foreign key(fk_id_prontuario) references Prontuarios(id_prontuario)
);

#alterar tabela Consultas - ALTER TABLE - Criar restrição
alter table Consultas add constraint unique_medico_data_hora unique(data, hora, fk_id_medico);

#criar tabela Tratamentos - CREATE TABLE
create table Tratamentos(
id_tratamento int not null auto_increment primary key,
nome varchar(50) not null,
dosagem_frequencia varchar(50),
instrucoes varchar(45),
fk_id_consulta int not null,
fk_id_medico int not null,
fk_id_paciente int not null,
foreign key(fk_id_consulta) references Consultas(id_consulta),
foreign key(fk_id_medico) references Medicos(id_medico),
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);

#criar tabela Exames - CREATE TABLE
create table Exames(
id_exame int not null auto_increment primary key,
nome varchar(200) not null,
resultado varchar(200),
fk_id_consulta int not null,
fk_id_medico int not null,
fk_id_paciente int not null,
foreign key(fk_id_consulta) references Consultas(id_consulta),
foreign key(fk_id_medico) references Medicos(id_medico),
foreign key(fk_id_paciente) references Pacientes(id_paciente)
);


#excluir tabelas - DROP TABLE
drop table Medicos;
drop table Fisicos;
drop table Juridicos;
drop table Pacientes;
drop table Consultas;
drop table Enderecos;
drop table Telefones;
drop Table Prontuarios;
drop table Medicacoes;
drop table Diagnosticos;
drop table Tratamentos;
drop table Exames;

#desativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=0;

#ativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=1;










