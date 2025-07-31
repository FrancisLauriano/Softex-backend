# consulta nome medico, nome paciente, data_consulta

select medico.nome, 
pacientes.nome, 
consultas.data_consulta
from medico
inner join consultas
on medico.id_medico = consultas.id_medico
inner join paciente
on paciente.id_paciente = consultas.id_paciente
inner join consultas
on consultas.id_consultas = relacao_consultas.id_consulta; 

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