from view_comunidade_organizacao import OrganizacaoView
from utils import limpar_terminal, pausar_execucao
from time import sleep

def gerenciar_organizacoes(organizacao_controller, comunidade_controller):
    larguraTotal = 110
    larguraID = 10
    larguraNome = 40
    larguraCnpj = 20
    larguraRazaoSocial = 40
    
    while True:
        limpar_terminal()
        print(f'\n########## GERENCIAR ORGANIZAÇÕES ##########\n')
        print(f'[1] Cadastrar Organização')
        print(f'[2] Listar Organizações')
        print(f'[3] Pesquisar Organização')
        print(f'[4] Atualizar Organização')
        print(f'[5] Deletar Organização')
        print(f'[0] Voltar')
        print(f'\n############################################')

        try:
            opcao = int(input('Opção: '))

            if opcao == 1:
                limpar_terminal()
                print(f'\n########## Cadastro ##########')
                try:
                    nome_fantasia = str(input('Nome Fantasia: ')).strip().lower()
                    cnpj = str(input('CNPJ: ')).strip().lower()
                    razao_social = str(input('Razão Social: ')).strip().lower()

                    if organizacao_controller.criar_organizacao(nome_fantasia, cnpj, razao_social):
                        print(f'\n-----------------------------------')
                        print('Organização cadastrada com sucesso!')
                        print(f'-----------------------------------')
                        sleep(3)
                        limpar_terminal()
                    else:
                        print(f'\n-----------------------------------------')
                        print('Já existe organização cadsatrada com CNPJ')
                        print(f'-----------------------------------------')
                        sleep(3)
                        limpar_terminal() 

                except ValueError:
                    print(f'\n-------------------------------')
                    print(f'Oops!  No valid.  Try again...')   
                    print(f'-------------------------------')
                    sleep(3)
                    limpar_terminal() 

            elif opcao == 2:
                limpar_terminal()
                print(f'\nLista de Organizações:')
                print('-'*larguraTotal)         

                print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                print('-'*larguraTotal)
                organizacao = organizacao_controller.listar_organizacoes()
                OrganizacaoView.mostar_organizacoes(organizacao)
                pausar_execucao()

            elif opcao == 3:
                limpar_terminal()
                print(f'\nPesquisar Comunidade')
                print('-'*larguraTotal)
                cnpj = str(input('Infome CNPJ da Organização: ')).strip().lower()

                print('\nResultado:')
                print('-'*larguraTotal)

                if organizacao_controller.buscar_organizacao(cnpj):
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    organizacao = organizacao_controller.buscar_organizacao(cnpj)
                    OrganizacaoView.mostrar_organizacao(organizacao)
                    pausar_execucao()
                else:
                    print(f'\n---------------------------')          
                    print('Organização não localizada!')
                    print(f'---------------------------') 
                    sleep(3)
                    limpar_terminal()          

            elif opcao == 4:
                limpar_terminal()
                cnpj = str(input('Infome CNPJ da Organização que deseja atualizar: ')).strip().lower()

                print(f'\nResultado:')
                print('-'*larguraTotal) 

                if organizacao_controller.buscar_organizacao(cnpj):
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    organizacao = organizacao_controller.buscar_organizacao(cnpj)
                    OrganizacaoView.mostrar_organizacao(organizacao)

                    try:
                        continuar = int(input('''\nDeseja atualizar?
    [1] Sim
    [2] Não                                                                                     
    Opção: '''))
                        if continuar == 1:
                            limpar_terminal()
                            print(f'\n########## Atualizar ##########')
                            novo_nome_fantasia = str(input('Nome Fantasia (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_cnpj = str(input('CNPJ (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_razao_social = str(input('Razão Social (ou clique ENTER para não alterar): ')).strip().lower()

                            if organizacao_controller.atualizar_organizacao(cnpj, novo_nome_fantasia, novo_cnpj, novo_razao_social):
                                print(f'\n-----------------------------------')
                                print('Organização atualizada com sucesso!')
                                print(f'-----------------------------------')
                                sleep(3)
                                limpar_terminal() 

                            else:
                                print(f'\n--------------------------------')                               
                                print('Já existe um cadastro com o CNPJ') 
                                print(f'--------------------------------')
                                sleep(3)
                                limpar_terminal()                              
                        elif continuar == 2:
                            True
                        else:
                            print(f'\n--------------')
                            print('Opção Inválida') 
                            print(f'--------------')  
                            sleep(3)
                            limpar_terminal()       
                    except ValueError:   
                        print(f'\n------------------------------')
                        print(f'Oops!  No valid.  Try again...')   
                        print(f'------------------------------')  
                        sleep(3)
                        limpar_terminal()
                else:
                    print(f'\n--------------------------')  
                    print('Organização não localizada')   
                    print(f'--------------------------')  
                    sleep(3)
                    limpar_terminal()
            elif opcao == 5: 
                limpar_terminal()
                cnpj = str(input('Infome CNPJ da Organização que deseja deletar: ')).strip().lower()

                print(f'\nResultado:')
                print('-'*larguraTotal)   

                if organizacao_controller.buscar_organizacao(cnpj):
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    organizacao = organizacao_controller.buscar_organizacao(cnpj)
                    OrganizacaoView.mostrar_organizacao(organizacao)


                    try:
                        continuar = int(input('''\nDeseja deletar?
    [1] Sim
    [2] Não                                                                                     
    Opção: '''))
                        if continuar == 1:
                            organizacao_controller.deletar_organizacao(cnpj)
                            print(f'\n---------------------------------') 
                            print('Organização deletada com sucesso!')
                            print(f'---------------------------------') 
                            sleep(3)
                            limpar_terminal()     
                        elif continuar == 2:
                            True
                        else:
                            print(f'\n--------------')
                            print('Opção Inválida') 
                            print(f'--------------')  
                            sleep(3)
                            limpar_terminal()     
                    except ValueError:   
                        print(f'\n------------------------------')
                        print(f'Oops!  No valid.  Try again...')    
                        print(f'------------------------------') 
                        sleep(3)
                        limpar_terminal() 
                else:
                    print(f'\n--------------------------')
                    print('Organização não localizada') 
                    print(f'--------------------------')
                    sleep(3)
                    limpar_terminal()           

            elif opcao == 0:
                return
            else:
                limpar_terminal()
                print(f'\n--------------')
                print('Opção Inválida') 
                print(f'--------------') 
                sleep(3)
                limpar_terminal()           
        except ValueError: 
            print(f'\n------------------------------')
            print(f'Oops!  No valid.  Try again...')    
            print(f'------------------------------')    
            sleep(3)
            limpar_terminal()  