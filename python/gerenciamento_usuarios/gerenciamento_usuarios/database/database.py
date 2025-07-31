## database/database.py:
from gerenciamento_usuarios.config.db_config import Config
import mysql.connector

class Database:
    def __init__(self):
        self.conexao = mysql.connector.connect(
            host=Config.DB_HOST,
            port=Config.DB_PORT,
            user=Config.DB_USER,
            password=Config.DB_PASSWORD,
            database=Config.DB_DATABASE,
        )
        self.cursor = self.conexao.cursor()
        

    def criar_tabela(self):
        try:
            self.cursor.execute(
                '''CREATE TABLE if not exists Usuarios(
                        id_usuario int NOT NULL auto_increment PRIMARY KEY,
                        nome varchar(255) NOT NULL,
                        cpf varchar(11) NOT NULL UNIQUE,
                        data_nascimento date NOT NULL,
                        altura float NOT NULL,
                        peso float NOT NULL
                )'''
            )
            self.conexao.commit()
            return f'Sucesso: conexão com banco de dados'
        except Exception as err:
            return f'Erro: conexão com banco de dados\n{err}'
        finally:
            if self.conexao.is_connected():
                self.cursor.close()
                self.conexao.close()
            
    def inicializar(self):
        self.criar_tabela()



