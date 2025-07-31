# mysql.connector: Um módulo Python que permite a interação com bancos de dados MySQL.
import mysql.connector
# Error: Uma classe usada para capturar exceções relacionadas ao MySQL.
from mysql.connector import Error
# Config: Uma classe (provavelmente definida em outro arquivo) que armazena as configurações de conexão com o banco de dados, como host, porta, usuário, senha e nome do banco de dados.
from config import Config


class Usuario:
    # Construtor __init__: Este método inicializa um objeto Usuario com atributos como nome, CPF, data de nascimento, altura e peso. Todos esses atributos são privados (indicados pelos dois underscores __ antes dos nomes) e podem ser fornecidos como argumentos ao criar uma instância da classe. Objetivo é evitar que os atributos sejam acidentalmente sobrescritos ou acessados fora da classe, além de reforçar o conceito de encapsulamento.
    def __init__(self, nome=None, cpf=None, data_nascimento=None, altura=None, peso=None):
        self.__nome = nome
        self.__cpf = cpf
        self.__data_nascimento = data_nascimento
        self.__altura = altura
        self.__peso = peso


    # Estabelece uma conexão com o banco de dados MySQL usando as configurações armazenadas na classe Config.
    # Tratamento de Exceção (try except): Se ocorrer algum erro ao tentar se conectar ao banco de dados, o erro é capturado e uma mensagem é impressa. Se a conexão falhar, o método retorna None.
    # OBS: O uso de dois underscores __ antes do nome do método torna o método fortemente privado, o que significa que ele não pode ser acessado diretamente de fora da classe. Isso ajuda a proteger a lógica interna da classe contra acessos externos não desejados. Objetivo é evitar que o método seja acidentalmente sobrescrito ou acessado fora da classe, além de reforçar o conceito de encapsulamento.
    def __conectar(self):
        try:
            conexao = mysql.connector.connect(
                host=Config.DB_HOST,
                port=Config.DB_PORT,
                user=Config.DB_USER,
                password=Config.DB_PASSWORD,
                database=Config.DB_DATABASE
            )
            return conexao
        except Error as e:
            print(f"Erro ao conectar ao banco de dados: {e}")
            return None


    # verifica se um determinado CPF já existe na tabela Usuarios: conecta ao banco de dados, executa uma consulta SQL para contar quantas vezes o CPF aparece na tabela, e retorna True se o CPF existir, ou False caso contrário.
    # Tratamento de Exceção(try except): Captura e imprime erros que possam ocorrer durante a execução da consulta.
    # Finalização(finally): Garante que o cursor e a conexão sejam fechados após a execução da consulta, independentemente de ter ocorrido um erro ou não.
    def verificar_cpf_existe(self):
        conexao = self.__conectar()
        if conexao is None:
            return False
        try:
            cursor = conexao.cursor()
            query = '''SELECT COUNT(*) FROM Usuarios WHERE cpf = %s'''
            cursor.execute(query, (self.__cpf,))
            count = cursor.fetchone()[0]
            return count > 0
        except Error as e:
            print(f"Erro ao verificar CPF: {e}")
            return False
        finally:
            cursor.close()
            conexao.close()


    # Insere um novo usuário na tabela Usuarios usando os atributos do objeto Usuario: conecta ao banco de dados, executa a consulta SQL de inserção, e confirma a transação (commit).
    # Tratamento de Exceção(try except): Captura e imprime erros que possam ocorrer durante a execução da inserção.
    # Finalização(finally): Garante que o cursor e a conexão sejam fechados.
    def adicionar_usuario(self):
        conexao = self.__conectar()
        if conexao is None:
            return
        try:
            cursor = conexao.cursor()
            query = '''INSERT INTO Usuarios(nome, cpf, data_nascimento, altura, peso) VALUES (%s, %s, %s, %s, %s)'''
            cursor.execute(query, (self.__nome, self.__cpf, self.__data_nascimento, self.__altura, self.__peso))
            conexao.commit()
            print('Usuário adicionado com sucesso!')
        except Error as e:
            print(f"Erro ao adicionar usuário: {e}")
        finally:
            cursor.close()
            conexao.close()


    # Retorna uma lista de todos os usuários na tabela Usuarios: executa uma consulta SQL para selecionar todos os registros da tabela Usuarios.
    # Tratamento de Exceção(try except): Captura e imprime erros que possam ocorrer durante a execução da consulta.
    # Finalização (finally): Garante que o cursor e a conexão sejam fechados.
    # OBS: Este método é estático (@staticmethod) e lida com operações que não precisam de acesso a atributos de instância, mas apenas realiza uma operação genérica relacionada à tabela Usuarios. Então, definir listar_usuarios como um método estático torna a intenção clara. essa função realiza uma operação geral da classe, sem depender de nenhuma instância específica.
    @staticmethod
    def listar_usuarios():
        conexao = Usuario().__conectar()  
        if conexao is None:
            return []
        try:
            cursor = conexao.cursor()
            query = '''SELECT * FROM Usuarios'''
            cursor.execute(query)
            usuarios = cursor.fetchall()
            return usuarios
        except Error as e:
            print(f"Erro ao listar usuários: {e}")
            return []
        finally:
            cursor.close()
            conexao.close()


    # Busca um usuário específico na tabela Usuarios com base no CPF: executa uma consulta SQL para selecionar o registro correspondente ao CPF fornecido.
    # Tratamento de Exceção(try except): Captura e imprime erros que possam ocorrer durante a execução da consulta.
    # Finalização(finally): Garante que o cursor e a conexão sejam fechados.
    def buscar_usuario(self):
        conexao = self.__conectar()
        if conexao is None:
            return None
        try:
            cursor = conexao.cursor()
            query = '''SELECT * FROM Usuarios WHERE cpf = %s'''
            cursor.execute(query, (self.__cpf,))
            usuario = cursor.fetchone()
            return usuario
        except Error as e:
            print(f"Erro ao buscar usuário: {e}")
            return None
        finally:
            cursor.close()
            conexao.close()


    # Atualiza as informações de um usuário na tabela Usuarios: executa uma consulta SQL para atualizar os campos do registro correspondente ao CPF original.
    # Tratamento de Exceção(try except): Captura e imprime erros que possam ocorrer durante a execução da atualização.
    # Finalização(finally): Garante que o cursor e a conexão sejam fechados.
    def atualizar_usuario(self, novo_cpf):
        conexao = self.__conectar()
        if conexao is None:
            return
        try:
            cursor = conexao.cursor()
            query = '''UPDATE Usuarios SET nome = %s, cpf = %s, data_nascimento = %s, altura = %s, peso = %s WHERE cpf = %s'''
            cursor.execute(query, (self.__nome, novo_cpf, self.__data_nascimento, self.__altura, self.__peso, self.__cpf))
            conexao.commit()
            print('Usuário atualizado com sucesso!')
        except Error as e:
            print(f"Erro ao atualizar usuário: {e}")
        finally:
            cursor.close()
            conexao.close()


    # Remove um usuário da tabela Usuarios: executa uma consulta SQL para deletar o registro correspondente ao CPF fornecido.
    # Tratamento de Exceção(try except): Captura e imprime erros que possam ocorrer durante a execução da exclusão.
    # Finalização(finally): Garante que o cursor e a conexão sejam fechados.
    def deletar_usuario(self):
        conexao = self.__conectar()
        if conexao is None:
            return
        try:
            cursor = conexao.cursor()
            query = '''DELETE FROM Usuarios WHERE cpf = %s'''
            cursor.execute(query, (self.__cpf,))
            conexao.commit()
            print('Usuário deletado com sucesso!')
        except Error as e:
            print(f"Erro ao deletar usuário: {e}")
        finally:
            cursor.close()
            conexao.close()
