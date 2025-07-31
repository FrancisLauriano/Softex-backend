#seleciona banco de dados - USE
use consultorio_medico;

#recuperar dados das tabelas - SELECT FROM
select * from Pacientes;
select * from Medicos;
select * from Consultas;
select * from Prontuarios;

#recuperar dados das tabelas - SELECT FROM / WHERE 
select * from Medicos;
select * from Pacientes where genero="feminino";
select nome, crm from Medicos where especialidade="oftalmologista";
select * from Pacientes where nome like '%silva%';

#recuperar dados da tabela ordenado 
select * from Pacientes
order by nome;

select * from Pacientes
order by nome desc;

#retornar pacientes agendado por data e hora em consultas por medico - INNER JOIN
select pacientes.nome, pacientes.cpf, 
medicos.nome, medicos.crm, medicos.especialidade,
consultas.data, consultas.hora
from pacientes
inner join consultas
on pacientes.id_paciente = consultas.fk_id_paciente
inner join medicos
on medicos.id_medico = consultas.fk_id_medico;

#retornar pacientes com historico de saúde de hipertensão - INNER JOIN
select pacientes.nome, pacientes.genero, pacientes.data_nascimento,
prontuarios.historico_saude
from pacientes
inner join prontuarios
on pacientes.id_paciente = prontuarios.fk_id_paciente
where prontuarios.historico_saude like '%hipertensão%' 
or prontuarios.historico_saude like '%hipertensa%'
or prontuarios.historico_saude like '%hipertenso%';

#retornar agenda de consulta de cada médico por data e hora - INNER JOIN
select medicos.especialidade, medicos.nome, medicos.crm,
consultas.data, consultas.hora,
pacientes.nome, pacientes.cpf
from medicos
inner join consultas
on medicos.id_medico = consultas.fk_id_medico
inner join pacientes
on pacientes.id_paciente = consultas.fk_id_paciente;

#retornar dados de endereço e telefones dos pacientes 
select pacientes.nome, pacientes.cpf,
telefones.celular_1, telefones.celular_2, telefones.residencial,
enderecos.logradouro, enderecos.bairro, enderecos.numero, enderecos.complemento,
enderecos.cep, enderecos.municipio, enderecos.uf, enderecos.pais
from pacientes
inner join enderecos
on enderecos.fk_id_paciente = pacientes.id_paciente
inner join telefones
on telefones.fk_id_paciente = pacientes.id_paciente;

#retornar dados dos pacientes e seus repectivos prontuarios, diagnosticos e medicações - LEFT JOIN
select pacientes.nome, pacientes.cpf, pacientes.data_nascimento, pacientes.genero,
prontuarios.historico_saude, prontuarios.observacao,
diagnosticos.diagnostico_1, diagnosticos.diagnostico_2, diagnosticos.diagnostico_3, diagnosticos.diagnostico_4, diagnosticos.diagnostico_5,
medicacoes.medicamento_1, medicacoes.medicamento_2, medicacoes.medicamento_3, medicacoes.medicamento_4, medicacoes.medicamento_5 
from pacientes
left outer join prontuarios
on pacientes.id_paciente = prontuarios.fk_id_paciente
left outer join diagnosticos
on diagnosticos.fk_id_prontuario = prontuarios.id_prontuario
left outer join medicacoes
on medicacoes.fk_id_prontuario = prontuarios.id_prontuario;










