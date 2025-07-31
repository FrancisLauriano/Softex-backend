#seleciona banco de dados - USE
use consultorio_medico;

#inserir dados na tabela Medicos - INSERT INTO
insert into Medicos(crm, cpf, nome, genero, especialidade) values 
('10.680', '696.608.205-35', 'Paulo Cesar', 'masculino', 'oftalmologista'),
('09.404', '123.456.789-00', 'Maria Jose', 'feminino', 'endocrinologista');

#inserir dados na tabela Juridicos - INSERT INTO
insert into Juridicos(cnpj, razao_social, fk_id_medico) values 
('99.999.999/9999-99', 'P. C. seviços medicos LTDA', 1);

#inserir dados na tabela Pacientes - INSERT INTO
insert into Pacientes(nome, cpf, data_nascimento, genero) values 
('João Silva', '876.456.764-09', '1980-03-01', 'masculino'),
('José Cruz', '579.567.062-65', '1956-11-27', 'masculino'),
('Amanda Souza', '432.987.657-34', '2020-07-16', 'feminino'),
('Bruna Alves', '987.321.643-92', '1988-09-11', 'feminino'),
('Marcos Coelho', '564.986.143-75', '1962-02-19', 'masculino'),
('Josefa Silva', '321.564.754-07', '1977-10-30', 'feminino');

#inserir dados na tabela Enderecos - INSERT INTO
insert into Enderecos(logradouro, bairro, numero, complemento, cep, municipio, uf, pais, fk_id_medico) values 
('Rua A', 'Flores', 222, null, '55.555-555', 'Recife', 'Pernambuco', 'Brasil', 1),
('Rua Nova', 'Dois', 10, 'apartamento n° 220','23.985-568', 'Olinda', 'Pernambuco', 'Brasil', 2);

insert into Enderecos(logradouro, bairro, numero, complemento, cep, municipio, uf, pais, fk_id_paciente) values 
('Rua B', 'Novo', 548, 'apartamento n° 104', '56.387-000', 'Recife', 'Pernambuco', 'Brasil', 1),
('Rua B', 'Novo', 548, 'apartamento n° 104', '56.387-000', 'Recife', 'Pernambuco', 'Brasil', 2),
('Rua Dois', 'Numero', 5799, 'apartamento n° 308', '68.305-294', 'Jaboatão dos Guararapes', 'Pernambuco', 'Brasil', 3),
('Rua Cubo', 'Geometria', 397, null, '86.595-003', 'Jaboatão dos Guararapes', 'Pernambuco', 'Brasil', 4),
('Avenida Rio', 'Amarelo', 5804, 'apartamento n° 510', '30.942-057', 'Paulista', 'Pernambuco', 'Brasil', 5),
('Avenida Nova Olinda', 'Misericórdia', 5874, 'apartamento n° 2002', '79.084-984', 'Olinda', 'Pernambuco', 'Brasil', 6);

#inserir dados na tabela Telefones - INSERT INTO
insert into Telefones(celular_1, celular_2, residencial, fk_id_medico) values 
('(81)99999-9999', '(81)90648-9530', null, 1),
('(81)98659-5673', '(81)97427-9390', null, 2);

insert into Telefones(celular_1, celular_2, residencial, fk_id_paciente) values 
('(81)98648-8405', null, '(81)3333-5678', 1),
('(81)96958-9643', null, null, 2),
('(81)95956-9450', null, null, 3),
('(81)97954-0756', '(81)98765-6489', null, 4),
('(81)99567-6743', '(81)99874-8649', null, 5),
('(81)97543-9876', '(81)98765-9452', null, 6);

#inserir dados na tabela Prontuarios - INSERT INTO
insert into Prontuarios(historico_saude, observacao, fk_id_paciente) values 
('Nega alergias, doenças crônicas e uso medicações', null, 1),
('Hipertenso, DM, tabagista desde os 15 anos', null, 2),
('Depressão', null, 3),
('Nega alergias, doenças crônicas e uso medicações', null, 4),
('Sobrepeso, hipertenso, DM tipo 2', null, 5),
('trombose venosa profunda', null, 6);

#inserir dados na tabela Consultas - INSERT INTO
insert into Consultas(data, hora, fk_id_medico, fk_id_paciente, fk_id_prontuario) values 
('2024-06-03', '13:30', 1, 1, 1),
('2024-06-03', '14:00', 1, 2, 2),
('2024-06-03', '14:30', 1, 3, 3),
('2024-06-10', '13:30', 1, 4, 4),
('2024-06-01', '08:00', 2, 4, 4),
('2024-06-01', '08:30', 2, 5, 5),
('2024-06-01', '09:00', 2, 6, 6);

#inserir dados na tabela Exames - INSERT INTO
insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Exame de refração', 'Miopia', 1, 1, 1),
('Mapeamento de retina', 'Sem anormalidades', 1, 1, 1),
('Tonometria', 'Sem anormalidades', 1, 1, 1),
('Fundoscopia', 'Sem anormalidades', 1, 1, 1);

insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Exame de refração', 'Miopia', 2, 1, 2),
('Mapeamento de retina', 'Sem anormalidades', 2, 1, 2),
('Tonometria', 'Glaucoma', 2, 1, 2),
('Fundoscopia', 'Sem anormalidades', 2, 1, 2);

insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Exame de refração', 'Astigmatismo', 3, 1, 3),
('Mapeamento de retina', 'Sem anormalidades', 3, 1, 3),
('Tonometria', 'Sem anormalidades', 3, 1, 3),
('Fundoscopia', 'Sem anormalidades', 3, 1, 3);

insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Exame de refração', 'Astigmatismo e miopia', 4, 1, 4),
('Mapeamento de retina', 'Sem anormalidades', 4, 1, 4),
('Tonometria', 'Sem anormalidades', 4, 1, 4),
('Fundoscopia', 'Sem anormalidades', 4, 1, 4);

insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Glicemia em jejum', 'DM controlada - 110 mg/dL', 5, 2, 4),
('Hemoglobina glicada', 'DM controlada - 6,5%', 5, 2, 4);

insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Glicemia em jejum', null, 6, 2, 5),
('Hemoglobina glicada', null, 6, 2, 5),
('Hemograma', null, 6, 2, 5),
('Colesterol Total e suas frações', null, 6, 2, 5),
('Triglicerídeos', null, 6, 2, 5);

insert into Exames(nome, resultado, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Glicemia em jejum', null, 7, 2, 6),
('Hemoglobina glicada', null, 7, 2, 6), 
('Hemograma', null, 7, 2, 6),
('Colesterol Total e suas frações', null, 7, 2, 6),
('Triglicerídeos', null, 7, 2, 6);

#inserir dados na tabela Tratamentos - INSERT INTO
insert into Tratamentos(nome, dosagem_frequencia, instrucoes, fk_id_consulta, fk_id_medico, fk_id_paciente) values 
('Oculos de correção', 'usar todos os dias', 'sem instruções especificas', 1, 1, 1),
('Cirurgia - Trabeculectomia', null, null, 2, 1, 2),
('Oculos de correção', 'usar para leitura, uso de telas', null, 3, 1, 3),
('Oculos de correção', null, null, 4, 1, 4),
('Insulina', 'manter dosagem atual', null, 5, 2, 4);

#inserir dados na tabela Medicacoes - INSERT INTO
insert into Medicacoes(medicamento_1, medicamento_2, medicamento_3, medicamento_4, medicamento_5, fk_id_paciente, fk_id_prontuario) values 
('Metformina','Captopril', null, null, null, 2, 2),
('Venlafaxina', null, null, null, null, 3, 3),
('Insulina', null, null, null, null, 4, 4),
('Enalapril', 'Metformina', null, null, null, 5, 5),
('Varfarina', null, null, null, null, 6, 6);

#inserir dados na tabela Diagnosticos - INSERT INTO
insert into Diagnosticos(diagnostico_1, diagnostico_2, diagnostico_3, diagnostico_4, diagnostico_5, fk_id_paciente, fk_id_prontuario) values 
('Miopia', null, null, null, null, 1, 1),
('Miopia', 'Glaucoma', null, null, null, 2, 2),
('Astigmatismo', null, null, null, null, 3, 3),
('Astigmatismo', 'Miopia', null, null, null, 4, 4);

#atualizar dados das tabelas
update Prontuarios 
set historico_saude='Hipertenso, DM tipo 2, etilista, tabagista desde os 15 anos'
where id_prontuario=2;

update Prontuarios 
set historico_saude='DM tipo 1'
where id_prontuario=4;

#excluir dados das tabelas DELETE 
delete from Medicos;
delete from Pacientes where id_membro=1;
delete from Consultas where data='2024-06-24';
delete from Consultas where data='2024-07-01' and hora='14:00' and fk_id_medico=1;
delete from Pacientes where nome like 'Silva%';

#excluir todos os dados das tabelas e redefine para um estado inicial, vazio, sem informações - TRUNCATE TABLE
truncate table Medicos;
truncate table Consultas;
