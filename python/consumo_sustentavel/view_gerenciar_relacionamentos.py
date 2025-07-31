from view_comunidade_organizacao import ComunidadeView, OrganizacaoView, RelacionamentosView
from utils import limpar_terminal, pausar_execucao
from time import sleep

def gerenciar_relacionamentos(organizacao_controller, comunidade_controller):
    larguraTotal = 110
    larguraID = 10
    larguraNomeC = 30
    larguraCod = 20
    larguraMun = 30
    larguraUf = 20
    larguraNomeO = 40
    larguraCnpj = 20
    larguraRazaoSocial = 40

    while True:
        limpar_terminal()
        print(f'\n########## GERENCIAR RELACIONAMENTOS ##########\n')
        print(f'[1] Adicionar Comunidade à Organização')
        print(f'[2] Remover Comunidade da Organização')
        print(f'[3] Alterar Comunidade da Organização')
        print(f'[4] Listar comunidades de uma organização')
        print(f'[5] Buscar a organização de uma comunidade')
        print(f'[0] Voltar')
        print(f'\n###############################################')

        try:
            opcao = int(input('Opção: '))

            if opcao == 1:
                limpar_terminal()
                print(f'\n########## Adicionar Comunidade à Organização ##########')
                cod_ibge_bairro = str(input('Informe o Código IBGE do Bairro da Comunidade: ')).strip().lower()
                cnpj = str(input('Informe o CNPJ da organização: ')).strip().lower()

                comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                organizacao = organizacao_controller.buscar_organizacao(cnpj)

                if comunidade and organizacao:
                    print(f'\nComunidade:')
                    print('-'*larguraTotal)
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeC}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    ComunidadeView.mostrar_comunidade(comunidade)

                    print('\nOrganização: ')
                    print('-'*larguraTotal)         
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeO}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    OrganizacaoView.mostrar_organizacao(organizacao)

                    try:
                        continuar = int(input('''\nDeseja adicionar a Comunidade à Organização?
[1] Sim
[2] Não                                                                                     
Opção: '''))
                        if continuar == 1:
                            if organizacao_controller.adicionar_comunidade_a_organizacao(cnpj, cod_ibge_bairro, comunidade_controller):
                                print('\n------------------------------------------------')
                                print('Comunidade adicionada à organização com sucesso!')
                                print('------------------------------------------------')
                                sleep(3)
                                limpar_terminal()
                            else:
                                print('\n-----------------------------------------------------------------------------------------')
                                print('Falha ao adicionar comunidade. Verifique se a comunidade já está vinculada à organização.')
                                print('-----------------------------------------------------------------------------------------')
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
                    print('\n-----------------------------------------------------------------------------------------------')   
                    print('Falha ao adicionar comunidade à organização. Verifique se ambos existem e se não há duplicação.')
                    print('-----------------------------------------------------------------------------------------------')   
                    sleep(3)
                    limpar_terminal()
            elif opcao == 2:
                limpar_terminal()   
                print(f'\n########## Remover Comunidade da Organização ##########')
                cod_ibge_bairro = str(input('Informe o Código IBGE do Bairro da Comunidade: ')).strip().lower()
                cnpj = str(input('Informe o CNPJ da organização: ')).strip().lower()

                comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                organizacao = organizacao_controller.buscar_organizacao(cnpj)

                if comunidade and organizacao:
                    print(f'\nComunidade:')
                    print('-'*larguraTotal)
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeC}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    ComunidadeView.mostrar_comunidade(comunidade)

                    print('\nOrganização: ')
                    print('-'*larguraTotal)         
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeO}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    OrganizacaoView.mostrar_organizacao(organizacao)

                    try:
                        continuar = int(input('''\nDeseja remover a Comunidade da Organização?
[1] Sim
[2] Não                                                                                     
Opção: '''))
                        if continuar == 1:
                            if organizacao_controller.remover_comunidade_da_organizacao(cnpj, cod_ibge_bairro, comunidade_controller):
                                print('\n-----------------------------------------------')
                                print('Comunidade removida da organização com sucesso!')
                                print('-----------------------------------------------')
                                sleep(3)
                                limpar_terminal()
                            else:
                                print('\n------------------------------------------------------------------------------------')
                                print('Falha ao remover comunidade. Verifique se a comunidade está vinculada à organização.')
                                print('------------------------------------------------------------------------------------')
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
                    print('\n--------------------------------------------------------------------------------------------------------') 
                    print('Falha ao remover comunidade da organização. Verifique se ambos existem e se a comunidade está vinculada.')
                    print('--------------------------------------------------------------------------------------------------------')   
                    sleep(3)
                    limpar_terminal()
            elif opcao == 3:
                limpar_terminal()   
                print(f'\n########## Alterar Comunidade da Organização ##########')
                cod_ibge_bairro = str(input('Informe o Código IBGE do Bairro da Comunidade')).strip().lower()
                atual_cnpj = str(input('Informe o CNPJ da organização atual: ')).strip().lower()
                novo_cnpj = str(input('Informe o novo CNPJ da organização: ')).strip().lower()

                comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                organizacao_atual = organizacao_controller.buscar_organizacao(atual_cnpj)
                organizacao_nova = organizacao_controller.buscar_organizacao(novo_cnpj)

                if comunidade and organizacao_atual and organizacao_nova:
                    print(f'\nComunidade:')
                    print('-'*larguraTotal)
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeC}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    ComunidadeView.mostrar_comunidade(comunidade)

                    print('\nOrganização Atual: ')
                    print('-'*larguraTotal)         
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeO}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    OrganizacaoView.mostrar_organizacao(organizacao_atual)

                    print('\nNova Organização: ')
                    print('-'*larguraTotal)         
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeO}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    OrganizacaoView.mostrar_organizacao(organizacao_nova)

                    try:
                        continuar = int(input('''\nDeseja alterar a Comunidade da Organização?
[1] Sim
[2] Não                                                                                     
Opção: '''))
                        if continuar == 1:
                            if organizacao_controller.alterar_comunidade_da_organizacao(atual_cnpj, novo_cnpj, cod_ibge_bairro, comunidade_controller):
                                print('\n------------------------------------------------------')
                                print('Comunidade alterada para nova organização com sucesso!')
                                print('------------------------------------------------------')
                                sleep(3)
                                limpar_terminal()
                            else:
                                print('\n------------------------------------------------------------------------------------------')
                                print('Falha ao alterar comunidade. Verifique se a comunidade está vinculada à organização atual.')
                                print('------------------------------------------------------------------------------------------')
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
                    print('\n---------------------------------------------------------------------------------------')    
                    print('Falha ao alterar comunidade da organização. Verifique se todos os dados estão corretos.')
                    print('---------------------------------------------------------------------------------------')   
                    sleep(3)
                    limpar_terminal()
            elif opcao == 4:
                limpar_terminal()
                cnpj = str(input('Informe o CNPJ da organização: ')).strip().lower()

                organizacao = organizacao_controller.buscar_organizacao(cnpj)

                if organizacao:
                    print('\nInformaçoes da Organização: ')
                    print('-'*larguraTotal)         
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeO}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    OrganizacaoView.mostrar_organizacao(organizacao)

                    print(f'\nLista de Comunidades da Organização: ')
                    print('-'*larguraTotal)
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeC}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    RelacionamentosView.mostrar_comunidades_da_organizacao(organizacao)
                    pausar_execucao()
                else:
                    print('\n---------------------------')
                    print('Organização não encontrada!')
                    print('---------------------------')
                    sleep(3)
                    limpar_terminal()
            elif opcao == 5:
                limpar_terminal() 
                cod_ibge_bairro = str(input('Digite o Código IBGE do bairro da comunidade: ')).strip().lower() 

                comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)  

                if comunidade:
                    print(f'\nInformações da Comunidade: ')
                    print('-'*larguraTotal)
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeC}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    ComunidadeView.mostrar_comunidade(comunidade)

                    print('\nOrganização de Vinculo da Comunidade: ')
                    print('-'*larguraTotal)         
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNomeO}} | {"CNPJ":<{larguraCnpj}} | {"RAZÃO SOCIAL":<{larguraRazaoSocial}}')
                    print('-'*larguraTotal)
                    RelacionamentosView.mostrar_organizacao_da_comunidade(comunidade, organizacao_controller)
                    pausar_execucao()
                else:
                    print('\n---------------------------')
                    print('Comunidade não encontrada!')
                    print('---------------------------')    
                    sleep(3)
                    limpar_terminal()

            elif opcao == 0:
                break

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


