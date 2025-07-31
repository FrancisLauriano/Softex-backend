from view_comunidade_organizacao import ComunidadeView
from utils import limpar_terminal, pausar_execucao
from time import sleep

def gerenciar_comunidades(comunidade_controller):
    larguraTotal = 110
    larguraID = 10
    larguraNome = 30
    larguraCod = 20
    larguraMun = 30
    larguraUf = 20
    
    while True:
        limpar_terminal()
        print(f'\n########## GERENCIAR COMUNIDADES ##########\n')
        print(f'[1] Cadastrar Comunidade')
        print(f'[2] Listar Comunidades')
        print(f'[3] Pesquisar Comunidade')
        print(f'[4] Atualizar Comunidade')
        print(f'[5] Deletar Comunidade')
        print(f'[0] Voltar')
        print(f'\n###########################################')


        try:
            opcao = int(input(f'Opção: '))

            if opcao == 1:
                limpar_terminal()
                print(f'\n########## Cadastro ##########')
                try:
                    nome = str(input('Nome: ')).strip().lower()
                    cod_ibge_bairro = str(input('Código IBGE do Bairro: ')).strip().lower()
                    municipio = str(input('Município: ')).strip().lower()
                    uf = str(input('UF: ')).strip().lower()
                    
                    if comunidade_controller.criar_comunidade(nome, cod_ibge_bairro, municipio, uf):
                        print(f'\n----------------------------------')
                        print(f'Comunidade cadastrada com sucesso!')
                        print(f'----------------------------------')
                        sleep(3)
                        limpar_terminal()                 
                    else:
                        print(f'\n-----------------------------------------------------')  
                        print(f'Já existe cadsatro com o mesmo código IBGE do bairro!')
                        print(f'-----------------------------------------------------')  
                        sleep(3)
                        limpar_terminal() 
                except ValueError:
                    print(f'\n------------------------------')
                    print(f'Oops!  No valid.  Try again...')   
                    print(f'------------------------------')
                    sleep(3)
                    limpar_terminal() 
            elif opcao == 2:
                limpar_terminal()
                print(f'\nLista de Comunidades:')
                print('-'*larguraTotal)
                print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                print('-'*larguraTotal)

                comunidade = comunidade_controller.listar_comunidades()
                ComunidadeView.mostrar_comunidades(comunidade)
                pausar_execucao()

            elif opcao == 3:
                limpar_terminal()
                print(f'\nPesquisar Comunidade')
                print('-'*larguraTotal)
                cod_ibge_bairro = str(input('Infome o Código IBGE do Bairro: ')).strip().lower()

                print(f'\nResultado:')
                if comunidade_controller.buscar_comunidade(cod_ibge_bairro):
                    print('-'*larguraTotal)
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                    ComunidadeView.mostrar_comunidade(comunidade)   
                    pausar_execucao()                
                else:
                    print(f'\n--------------------------')
                    print('Comunidade não localizada!')    
                    print(f'--------------------------')
                    sleep(3)
                    limpar_terminal()                                   
            elif opcao == 4:
                limpar_terminal()
                cod_ibge_bairro = str(input('\nInfome o Código IBGE do Bairro da comunidade que deseja atualizar: ')).strip().lower()
                print(f'\nResultado:')
                print('-'*larguraTotal)
                
                if comunidade_controller.buscar_comunidade(cod_ibge_bairro):
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                    ComunidadeView.mostrar_comunidade(comunidade)
                   
                    try:
                        continuar = int(input('''\nDeseja atualizar?
    [1] Sim
    [2] Não                                                                                     
    Opção: '''))
                        if continuar == 1:
                            limpar_terminal()
                            print(f'\n########## Atualizar ##########')
                            novo_nome = str(input('Nome (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_cod_ibge_bairro = str(input('Código IBGE do Bairro (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_municipio = str(input('Município (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_uf = str(input('UF (ou clique ENTER para não alterar): ')).strip().lower()
                            
                            if comunidade_controller.atualizar_comunidade(cod_ibge_bairro, novo_nome, novo_cod_ibge_bairro, novo_municipio, novo_uf):
                                print(f'\n----------------------------------')
                                print('Comunidade atualizada com sucesso!')
                                print(f'----------------------------------')
                                sleep(3)
                                limpar_terminal() 
                            else:
                                print(f'\n----------------------------------------------')
                                print('Já existe um cadastro com o código IBGE bairro')    
                                print(f'----------------------------------------------')
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
                    print('Comunidade não localizada') 
                    print(f'--------------------------')
                    sleep(3)
                    limpar_terminal()           
            elif opcao == 5:
                limpar_terminal()
                cod_ibge_bairro = str(input('\nInfome o Código IBGE do Bairro da comunidade que deseja excluir: ')).strip().lower()
                print(f'\nResultado:')
                print('-'*larguraTotal)

                if comunidade_controller.buscar_comunidade(cod_ibge_bairro):
                    print(f'{"ID":<{larguraID}} | {"NOME":<{larguraNome}} | {"COD IBGE BAIRRO":<{larguraCod}} | {"MUNICÍPIO":<{larguraMun}} | {"UF":<{larguraUf}}')
                    print('-'*larguraTotal)
                    comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                    ComunidadeView.mostrar_comunidade(comunidade)

                    try:
                        continuar = int(input('''\nDeseja deletar?
    [1] Sim
    [2] Não                                                                                     
    Opção: '''))
                        if continuar == 1:
                            comunidade_controller.deletar_comunidade(cod_ibge_bairro)
                            print(f'\n----------------------------------')
                            print('Comunidade deletada com sucesso!')
                            print(f'----------------------------------')
                            sleep(3)
                            limpar_terminal() 
                        elif continuar == 2:
                            True
                        else:
                            print(f'\n---------------')
                            print('Opção Inválida!')    
                            print(f'---------------')
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
                    print('Comunidade não localizada') 
                    print(f'--------------------------')  
                    sleep(3)
                    limpar_terminal()         
            elif opcao == 0:
                return
            else:
                limpar_terminal()
                print(f'\n---------------')
                print('Opção Inválida!')    
                print(f'---------------') 
                sleep(3)
                limpar_terminal()       
        except ValueError:
            print(f'\n------------------------------')
            print(f'Oops!  No valid.  Try again...')    
            print(f'------------------------------')  
            sleep(3)
            limpar_terminal()    



