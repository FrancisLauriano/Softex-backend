from database.database import Database
from models.usuarios_model import Usuario
from views.usuarios_view import UsuarioView

class UsuarioController:
    def __init__(self):
        self.database = Database()


    def inicializador(self):
        self.database.inicializar()


    def adicionar_usuario(self, nome, cpf, data_nascimento, altura, peso):
        if not nome or not isinstance(nome, str):
            print('Nome inválido')
            return
        if not cpf or not isinstance(cpf, str) or len(cpf) != 11:
            print('CPF inválido')
            return
        if not data_nascimento or not isinstance(data_nascimento, str):
            print('Data de nascimento inválido')
            return
        if not altura or not isinstance(altura, (float, int)) or altura <= 0:
            print('Altura inválida')
            return
        if not peso or not isinstance(peso, (float, int)) or peso <= 0:
            print('Peso inválido')
            return
        
        usuario = Usuario(nome=nome, cpf=cpf, data_nascimento=data_nascimento, altura=altura, peso=peso)

        if usuario.verificar_cpf_existe(cpf):
            print('CPF já registrado')
            return
        
        usuario.adicionar_usuario()
        return True


    @staticmethod
    def listar_usuarios():
        usuarios = Usuario.listar_usuarios()
        UsuarioView.exibir_usuarios(usuarios)
 
      
    def buscar_usuario(self, cpf):
        if not cpf or not isinstance(cpf, str) or len(cpf) != 11:
            print('CFP inválido')
            return
        
        usuario = Usuario(nome=None, cpf=cpf, data_nascimento=None, altura=None, peso=None)
        usuario_data = usuario.buscar_usuario()
        UsuarioView.exibir_usuario(usuario_data)


    def atualizar_usuario(self, cpf_atual, nome=None, cpf_novo=None, data_nascimento=None, altura=None, peso=None):    
        if not cpf_atual or not isinstance(cpf_atual, str) or len(cpf_atual) != 11:
            print('CPF atual inválido')
            return
        
        usuario = Usuario(nome=None, cpf=cpf_atual, data_nascimento=None, altura=None, peso=None)
        usuario_atual = usuario.buscar_usuario()

        if not usuario_atual:
            print('Usuário não encontrado')
            return
        if cpf_novo and cpf_novo != cpf_atual:
            if not isinstance(cpf_novo, str) or len(cpf_novo) != 11:
                print('CPF inválido')
                return
            if usuario.verificar_cpf_existe(cpf_novo):
                print('CPF já registrado')
                return
        if nome and not isinstance(nome, str):
            print('Nome inválido')
            return
        if data_nascimento and not isinstance(data_nascimento, str):
            print('Data nascimento inválida')
            return
        if altura and (not isinstance(altura, (float, int)) or altura <= 0):
            print('Altura inválida')
            return
        if peso and (not isinstance(peso, (float, int)) or peso <= 0):
            print('Peso inválido')   
            return

        nome = nome or usuario_atual[1]
        cpf_novo = cpf_novo or cpf_atual
        data_nascimento = data_nascimento or usuario_atual[3]
        altura = altura or usuario_atual[4]
        peso = peso or usuario_atual[5]

        usuario_atualizado = Usuario(nome=nome, cpf=cpf_atual, data_nascimento=data_nascimento, altura=altura, peso=peso)
        usuario_atualizado.atualizar_usuario(cpf_novo)
        return True


    def deletar_usuario(self, cpf):
        if not cpf or not isinstance(cpf, str) or len(cpf) != 11:
            print('CPF inválido')
            return
        usuario = Usuario(nome=None, cpf=cpf, data_nascimento=None, altura=None, peso=None)
        usuario.deletar_usuario()
        return True


