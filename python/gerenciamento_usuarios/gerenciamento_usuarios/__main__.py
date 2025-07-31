## __main__.py:
from gerenciamento_usuarios.controllers.usuarios_controller import UsuarioController
from gerenciamento_usuarios.utils.utils import limpar_terminal, pausar_execucao
from time import sleep

class Menu:
    def __init__(self):
        self.controller = UsuarioController()
    

    def exibir_menu(self):
        self.controller.inicializador()

        while True:
            limpar_terminal()
            print('\n########## MENU ##########\n')
            print('[1] Adicionar Usuário')
            print('[2] Listar Usuários')
            print('[3] Buscar Usuário por CPF')
            print('[4] Atualizar Usuário')
            print('[5] Deletar Usuário')
            print('[6] Sair')
            print('\n##########################')

            try:
                opcao = int(input('Escolha uma opção: '))
                limpar_terminal()

                if opcao == 1:
                    self.adicionar_usuario()
                elif opcao == 2:
                    self.listar_usuarios()
                elif opcao == 3:
                    self.buscar_usuario()
                elif opcao == 4:
                    self.atualizar_usuario()
                elif opcao == 5:
                    self.deletar_usuario()
                elif opcao == 6:
                    self.sair()
                    break
                else:
                    print(f'\n---------------')
                    print(f'Opção Inválida!')
                    print(f'---------------')
                    pausar_execucao()  

            except ValueError:
                print(f'\n------------------------------')
                print(f'Oops!  No valid.  Try again...')   
                print(f'------------------------------')
                pausar_execucao()      


    def adicionar_usuario(self):
        limpar_terminal()
        print('\n---------- CADASTRO DE USUÁRIO ----------\n')
        nome = input('Nome: ').strip().lower()
        cpf = input('CPF (11 dígitos): ').strip().lower()
        data_nascimento = input('Data de Nascimento (YYYY-MM-DD): ').strip().lower()
        altura = float(input('Altura em metros: '))
        peso = float(input('Peso em KG: '))

        print('\n')
        if self.controller.adicionar_usuario(nome, cpf, data_nascimento, altura, peso):
            print(f'\n-------------------------------')
            print(f'Usuário cadastrado com sucesso!')
            print(f'-------------------------------')
            sleep(3)
            limpar_terminal()
        else:
            print(f'\n--------------------------')
            print(f'Erro ao cadastrar usuário!')
            print(f'--------------------------')
            sleep(3)
            limpar_terminal()


    def listar_usuarios(self):
        limpar_terminal()
        print('\n---------- LISTA DE USUÁRIOS ----------\n')
        self.controller.listar_usuarios()
        pausar_execucao()


    def buscar_usuario(self):    
        limpar_terminal()
        print('\n---------- LOCALIZAR USUÁRIO ----------\n')
        cpf = input('Informe o CPF do usuário: ').strip().lower()

        print('\nResultado da pesquisa:\n')
        self.controller.buscar_usuario(cpf)
        pausar_execucao()    


    def atualizar_usuario(self):
            limpar_terminal()
            print('\n---------- ATUALIZAR USUÁRIO ----------\n')
            cpf_atual = input('Informe o CPF do usuário: ').strip().lower()

            print('\nResultado:\n')
            self.controller.buscar_usuario(cpf_atual)

            print('\nDeseja atualizar usuário?')
            print('[1] Sim')
            print('[0] Não')
            try:
                continuar = int(input('OPÇÃO: '))

                if continuar == 0:
                    True
                elif continuar == 1:
                    limpar_terminal()
                    print('\n--------------- ATUALIZAR USUÁRIO ---------------\n')
                    nome = input('Nome (ou clique ENTER para não alterar): ').strip().lower()
                    cpf_novo = input('CPF (11 dígitos) (ou clique ENTER para não alterar): ').strip().lower()
                    data_nascimento = input('Data de Nascimento (YYYY-MM-DD): (ou clique ENTER para não alterar): ').strip().lower()
                    altura = float(input('Altura em metros: (ou clique ENTER para não alterar): '))
                    peso = float(input('Peso em KG: (ou clique ENTER para não alterar): '))

                    if self.controller.atualizar_usuario(cpf_atual, nome, cpf_novo, data_nascimento, altura, peso):
                        print(f'\n-------------------------------')
                        print(f'Usuário atualizado com sucesso!')
                        print(f'-------------------------------')
                        sleep(3)
                        limpar_terminal() 
                    else:
                        print(f'\n--------------------------')
                        print(f'Erro ao atualizar usuário!')
                        print(f'--------------------------')
                        sleep(3)
                        limpar_terminal() 
                else:
                    print(f'\n---------------')
                    print(f'Opção Inválida!')
                    print(f'---------------')
                    sleep(3)
                    limpar_terminal()
            except ValueError:
                print(f'\n------------------------------')
                print(f'Oops!  No valid.  Try again...')   
                print(f'------------------------------')
                sleep(3)
                limpar_terminal()


    def deletar_usuario(self):   
        limpar_terminal()
        print('\n---------- EXCLUIR USUÁRIO ----------\n')
        cpf = input('Informe o CPF do usuário: ').strip().lower()

        print('\nResultado:\n')
        self.controller.buscar_usuario(cpf)

        print('\nDeseja excluir usuário?')
        print('[1] Sim')
        print('[0] Não')
        try:
            continuar = int(input('OPÇÃO: '))
            if continuar == 0:
                True
            elif continuar == 1:   
                if self.controller.deletar_usuario(cpf):
                    print(f'\n-------------------------------')
                    print(f'Usuário excluido com sucesso!')
                    print(f'-------------------------------')
                    sleep(3)
                    limpar_terminal()     
                else:
                    print(f'\n--------------------------')
                    print(f'Erro ao excluir usuário!')
                    print(f'--------------------------') 
                    sleep(3)
                    limpar_terminal()     
        except ValueError:
            print(f'\n------------------------------')
            print(f'Oops!  No valid.  Try again...')   
            print(f'------------------------------')  
            sleep(3)
            limpar_terminal()   


    def sair(self):     
        limpar_terminal()
        print(f'Encerrando o sistema...')
        print('|'*5)
        sleep(0.1)
        print('|'*4)
        sleep(0.1)
        print('|'*3)
        sleep(0.1)
        print('|'*2)
        sleep(0.1)
        print('|')
        sleep(0.1)
        print(f'FIM')  

               
if __name__ == "__main__":
    menu = Menu()
    menu.exibir_menu()
   

