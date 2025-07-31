#DML - principais comando : INSERT, DELETE e UPDATE (comandos manipulação dos dados)
#inserir dados, atualizar e modificar eexcluir dados da tabela

#seleciona banco de dados - USE
use startup;

#inserir dados na tabela membros - INSERT INTO
insert into membros(id_membro, nome, cargo) values (null, "Paulo", "Programador 1");
insert into membros(id_membro, nome, cargo, genero) value(null, "Maria", "Programador 2", "F");
insert into membros(id_membro, nome, cargo, genero) value(null,"João Silva", "Desenvolvedor Full Stack", "M"); 
insert into membros(id_membro, nome, cargo, genero) value(null, "Maria Santos", "Analista de Banco de Dados", "F"); 
insert into membros(id_membro, nome, cargo, genero) value(null, "Pedro Oliveira", "Engenheiro de Software", "M"); 
insert into membros(id_membro, nome, cargo, genero) value(null, "Ana Costa", "Administrador de Redes", "F"); 
insert into membros(id_membro, nome, cargo, genero) value(null, "Carlos Souza", "Especialista em Segurança da Informação", "M"); 

#inserir dados na tabela tarefas - INSERT INTO
insert into tarefas(id_tarefa, descricao, id_membro_fk) values (null, "Criar a classe produto", 1);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Gerenciar banco de dados", '2023-03-01', '2024-06-16', 2);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Desenvolver novo módulo de login para o sistema", null, null, 3);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Testar e validar integração com API externa", null, null, 4);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Realizar manutenção preventiva nos servidores", null, null, 5);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Criar documentação técnica do projeto XYZ", null, null, 6);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Implementar melhorias na interface do usuário", null, null, 7);

#atualizar dados da tabela membros - UPDATE
update membros 
set genero="M"
where id_membro=1;

update membros
set nome = "André Luiz"
where id_membro = 1;

update membros
set cargo = "Administrador de Rede Sênior"
where id_membro = 6;

#atualizar dados da tabela tarefas - UPDATE
update tarefas
set data_inicio='2024-06-01'
where id_membro_fk=1;

update tarefas 
set data_finalizacao='2024-06-17'
where id_membro_fk=1;

#desativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=0;

#ativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=1;

#excluir dados da tabela membro - DELETE 
delete from membros;
delete from membros where id_membro=1;
delete from membros where cargo="programador 1";
delete from membros where cargo="teste" and nome="jose";
delete from membros where nome like 'silva%';

#excluir dados da tabela tarefas - DELETE
delete from tarefas;
delete from tarefas where id_tarefa=2;

#excluir todos os dados da tabela e redefine para um estado inicial, vazio, sem informações - TRUNCATE TABLE
truncate table membros;
truncate table tarefas;