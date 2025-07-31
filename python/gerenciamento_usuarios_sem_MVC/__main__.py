from usuario import Usuario

class Menu:
    def exibir_menu(self):
        while True:
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
                    break
                else:
                    print('Opção Inválida!')

            except ValueError:
                print(f'\n------------------------------')
                print(f'Oops!  No valid.  Try again...')   
                print(f'------------------------------')  


    def adicionar_usuario(self):
        nome = input('Nome: ').strip()
        cpf = input('CPF (11 dígitos): ').strip()
        data_nascimento = input('Data de Nascimento (YYYY-MM-DD): ').strip()
        altura = float(input('Altura em metros: '))
        peso = float(input('Peso em KG: '))

        usuario = Usuario(nome, cpf, data_nascimento, altura, peso)

        if usuario.verificar_cpf_existe():
            print('CPF já registrado')
        else:
            usuario.adicionar_usuario()
            print('Usuário adicionado com sucesso!')

    def listar_usuarios(self):
        usuarios = Usuario.listar_usuarios()
        for usuario in usuarios:
            print(f'Nome: {usuario[1]}, CPF: {usuario[2]}, Data Nascimento: {usuario[3]}, Altura: {usuario[4]}, Peso: {usuario[5]}')

    def buscar_usuario(self):
        cpf = input('CPF (11 dígitos): ').strip()
        usuario = Usuario(cpf=cpf)
        resultado = usuario.buscar_usuario()
        if resultado:
            print(f'Nome: {resultado[1]}, CPF: {resultado[2]}, Data Nascimento: {resultado[3]}, Altura: {resultado[4]}, Peso: {resultado[5]}')
        else:
            print('Usuário não encontrado')

    def atualizar_usuario(self):
        cpf_atual = input('CPF atual (11 dígitos): ').strip()
        nome = input('Novo Nome (ou deixe em branco): ').strip()
        cpf_novo = input('Novo CPF (ou deixe em branco): ').strip()
        data_nascimento = input('Nova Data de Nascimento (ou deixe em branco): ').strip()
        altura = input('Nova Altura (ou deixe em branco): ').strip()
        peso = input('Novo Peso (ou deixe em branco): ').strip()

        usuario = Usuario(nome=nome or None, cpf=cpf_atual, data_nascimento=data_nascimento or None, altura=float(altura) if altura else None, peso=float(peso) if peso else None)
        usuario.atualizar_usuario(cpf_novo or cpf_atual)
        print('Usuário atualizado com sucesso!')

    def deletar_usuario(self):
        cpf = input('CPF (11 dígitos): ').strip()
        usuario = Usuario(cpf=cpf)
        usuario.deletar_usuario()
        print('Usuário deletado com sucesso!')

if __name__ == "__main__":
    menu = Menu()
    menu.exibir_menu()
