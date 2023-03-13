INSERT INTO Pessoa (nome, CPF, RG, telefone, rua, bairro, numero, CEP, estado, cidade, pais) 
VALUES
('Lucas Silva', '12345678901', '12345678', '(11) 35562500', 'Rua A', 'Centro', '100', '01001000', 'SP', 'São Paulo', 'Brasil'),
('Ana Santos', '23456789012', '23456789', '(11) 35562500', 'Rua B', 'Jardins', '200', '01401000', 'SP', 'São Paulo', 'Brasil'),
('Fernanda Souza', '34567890123', '34567890', '(11) 35562500', 'Rua C', 'Moema', '300', '04001000', 'SP', 'São Paulo', 'Brasil'),
('Rodrigo Costa', '45678901234', '45678901', '(11) 35562500', 'Rua D', 'Pinheiros', '400', '05401000', 'SP', 'São Paulo', 'Brasil'),
('Julia Oliveira', '56789012345', '56789012', '(11) 35562500', 'Rua E', 'Vila Madalena', '500', '05401000', 'SP', 'São Paulo', 'Brasil'),
('Luiz Gomes', '67890123456', '67890123', '(11) 35562500', 'Rua F', 'Mooca', '600', '03101000', 'SP', 'São Paulo', 'Brasil'),
('Mariana Santos', '78901234567', '78901234', '(11) 35562500', 'Rua G', 'Vila Mariana', '700', '04001000', 'SP', 'São Paulo', 'Brasil'),
('Pedro Lima', '89012345678', '89012345', '(11) 35562500', 'Rua H', 'Santana', '800', '02001000', 'SP', 'São Paulo', 'Brasil'),
('Bianca Alves', '90123456789', '90123456', '(11) 35562500', 'Rua I', 'Liberdade', '900', '01501000', 'SP', 'São Paulo', 'Brasil'),
('João da Silva', '11111111111', '01234561', '(11) 35562500', 'Rua J', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Pedro Santos', '44444444444', '01234563', '(11) 35562500', 'Rua L', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Lucas Ferreira', '55555555555', '01234564', '(11) 35562500', 'Rua M', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Luiza Almeida', '66666666666', '01234565', '(11) 35562500', 'Rua N', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Rodrigo Oliveira', '77777777777', '01234566', '(11) 35562500', 'Rua O', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Renata Sousa', '88888888888', '01234567', '(11) 35562500', 'Rua P', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Gabriel Silva', '99999999999', '01234568', '(11) 35562500', 'Rua Q', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Fernanda Santos', '10101010101', '01234569', '(11) 35562500', 'Rua R', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Ricardo Souza', '1010101116', '01234510', '(11) 35562500', 'Rua S', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil'),
('Mateus Souza', '1010101012', '01234511', '(11) 35562500', 'Rua T', 'Campo Belo', '1000', '04601000', 'SP', 'São Paulo', 'Brasil');


INSERT INTO Funcionario (codigo_pessoa, salario, horario_trabalho)
VALUES
  (1, 2000.00, 8),
  (2, 2500.00, 8),
  (3, 3000.00, 8),
  (4, 3500.00, 8),
  (5, 4000.00, 7),
  (6, 4500.00, 7),
  (7, 5000.00, 7),
  (8, 5500.00, 7),
  (9, 6000.00, 4),
  (10, 6500.00, 4);

INSERT INTO Paciente (codigo_pessoa, plano_saude)
VALUES
    (12, 'Amil'),
    (13, 'Unimed'),
    (14, 'Bradesco Saúde'),
    (15, 'SulAmérica'),
    (16, 'Golden Cross'),
    (17, 'Porto Seguro'),
    (18, 'Intermédica'),
    (19, 'NotreDame Intermédica');

INSERT INTO Dependente (nome, codigo_funcionario, grau_parentesco)
VALUES
    ('João', 1, 'Filho'),
    ('Maria', 1, 'Filha'),
    ('Pedro', 2, 'Filho'),
    ('Lucas', 2, 'Filho'),
    ('Mariana', 3, 'Filha'),
    ('Bruna', 4, 'Esposa'),
    ('Julia', 5, 'Filha'),
    ('Fernando', 6, 'Filho'),
    ('Gabriela', 6, 'Filha'),
    ('Vitor', 7, 'Filho');

INSERT INTO Auxiliar (codigo_funcionario, grau)
VALUES
    (1, 10),
    (2, 6);

INSERT INTO Medico (codigo_funcionario, CRM, especialidade)
VALUES
    (4, '123456', 'Cardiologista'),
    (5, '234567', 'Neurologista'),
    (6, '345678', 'Pediatra');

INSERT INTO Enfermeiro (codigo_funcionario, COREN)
VALUES
    (7, '345678'),
    (8, '456789');

INSERT INTO Recepcionista (codigo_funcionario, ramal)
VALUES
    (9, 'FLASH 1'),
    (10, 'FLASH 2');

INSERT INTO Setor (nome, capacidade, numero, bloco)
VALUES
    ('Cardiologia', 30, 201, 'A'),
    ('Neurologia', 20, 302, 'B'),
    ('Pediatria', 25, 101, 'C'),
    ('Oncologia', 15, 401, 'D'),
    ('Ginecologia', 18, 205, 'A'),
    ('Ortopedia', 12, 304, 'B'),
    ('Endocrinologia', 10, 105, 'C'),
    ('Hematologia', 8, 402, 'D'),
    ('Urologia', 14, 207, 'A'),
    ('Dermatologia', 16, 301, 'B');

INSERT INTO Cadastro (codigo_recepcionista, codigo_pessoa, data_cadastro)
VALUES 
    (9, 1, '2022-12-01'),
    (10, 2, '2022-12-02'),
    (9, 3, '2022-12-03'),
    (9, 4, '2022-12-04'),
    (10, 5, '2022-12-05'),
    (9, 6, '2022-12-06'),
    (9, 7, '2022-12-07'),
    (10, 8, '2022-12-08'),
    (9, 9, '2022-12-09'),
    (9, 10, '2022-12-10'),
    (9, 11, '2022-12-01'),
    (10, 12, '2022-12-02'),
    (9, 13, '2022-12-03'),
    (9, 14, '2022-12-04'),
    (10, 15, '2022-12-05'),
    (9, 16, '2022-12-06'),
    (9, 17, '2022-12-07'),
    (10, 18, '2022-12-08'),
    (9, 19, '2022-12-09');

INSERT INTO Pertence (codigo_setor, codigo_funcionario, data_inicial, data_final)
VALUES 
    (1, 1, '2022-01-01', NULL),
    (2, 2, '2022-01-01', NULL),
    (3, 3, '2022-01-01', NULL),
    (4, 4, '2022-01-01', NULL),
    (1, 5, '2022-02-01', NULL),
    (2, 6, '2022-07-01', NULL),
    (3, 7, '2022-03-01', NULL),
    (4, 8, '2022-04-01', NULL),
    (1, 9, '2022-06-01', NULL),
    (2, 10, '2022-01-01', NULL);

INSERT INTO Consulta (codigo_medico, codigo_paciente, codigo_setor, data_consulta, data_retorno, receita, enfermidade)
VALUES
    (4, 12, 1, '2022-12-01', '2022-12-02', 'Dipirona', 'Dor de cabeça'),
    (5, 13, 2, '2022-12-02', '2022-12-03', 'Dipirona', 'Dor de cabeça'),
    (6, 14, 3, '2022-12-03', '2022-12-04', 'Dipirona', 'Dor de cabeça'),
    (4, 15, 1, '2022-12-04', '2022-12-05', 'Dipirona', 'Dor de cabeça'),
    (5, 16, 2, '2022-12-05', '2022-12-06', 'Dipirona', 'Dor de cabeça'),
    (6, 17, 3, '2022-12-06', '2022-12-07', 'Dipirona', 'Dor de cabeça'),
    (4, 18, 1, '2022-12-07', '2022-12-08', 'Dipirona', 'Dor de cabeça'),
    (5, 19, 2, '2022-12-08', '2022-12-09', 'Dipirona', 'Dor de cabeça');

INSERT INTO Auxilia (codigo_enfermeiro, numero_consulta)
VALUES
    (7, 1),
    (8, 2),
    (7, 3),
    (8, 4),
    (7, 5),
    (8, 6),
    (7, 7),
    (8, 8);