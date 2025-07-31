## models/usuarios_model:
from gerenciamento_usuarios.database.database import Database

class Usuario:
    def __init__(self, nome, cpf, data_nascimento, altura, peso):
        self.__nome = nome
        self.__cpf = cpf
        self.__data_nascimento = data_nascimento
        self.__altura = altura
        self.__peso = peso


    def verificar_cpf_existe(self):
        db = Database()
        query = '''SELECT COUNT(*) FROM Usuarios WHERE cpf = %s'''
        db.cursor.execute(query,(self.__cpf,))
        count = db.cursor.fetchone()[0]
        db.cursor.close()
        db.conexao.close()
        return count > 0

    def adicionar_usuario(self): 
        db = Database()
        query = '''INSERT INTO Usuarios(nome, cpf, data_nascimento, altura, peso) VALUES (%s, %s, %s, %s, %s)'''
        db.cursor.execute(query, (self.__nome, self.__cpf, self.__data_nascimento, self.__altura, self.__peso))
        db.conexao.commit()
        db.cursor.close()
        db.conexao.close()
        return True

    def listar_usuarios():
        db = Database()
        query = '''SELECT * FROM Usuarios'''
        db.cursor.execute(query)
        usuarios = db.cursor.fetchall()
        db.cursor.close()
        db.conexao.close()
        return usuarios
    
    def buscar_usuario(self):
        db = Database()
        query = '''SELECT * FROM Usuarios WHERE cpf = %s'''
        db.cursor.execute(query, (self.__cpf,))
        usuario = db.cursor.fetchone()
        db.cursor.close()
        db.conexao.close()
        return usuario
    
    def atualizar_usuario(self, novo_cpf):
        db = Database()
        query = '''UPDATE Usuarios SET nome = %s, cpf = %s, data_nascimento = %s, altura = %s, peso = %s WHERE cpf = %s'''
        db.cursor.execute(query, (self.__nome, novo_cpf, self.__data_nascimento, self.__altura, self.__peso, self.__cpf))
        db.conexao.commit()
        db.cursor.close()
        db.conexao.close()
        return True

    def deletar_usuario(self):
        db = Database()
        query = '''DELETE FROM Usuarios WHERE cpf = %s'''
        db.cursor.execute(query, (self.__cpf,))
        db.conexao.commit()
        db.cursor.close()
        db.conexao.close() 
        return True  


    
