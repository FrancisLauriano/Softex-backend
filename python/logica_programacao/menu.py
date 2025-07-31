from controller import ComunidadeController, OrganizacaoController
from consumo_sustentavel.view_comunidade_organizacao import ComunidadeView

def menu_principal():
    comunidade_controller = ComunidadeController()
    organizacao_controller = OrganizacaoController()

    while True:
        print(f'\n########## MENU PRINCIPAL ##########')
        print(f'[1] Gerenciar Comunidades')
        print(f'[2] Gerenciar Organizações')
        print(f'[0] Sair')
        print(f'####################################')
        
        try:
            opcao = int(input(f'Opção: '))

            if opcao == 1:
                gerenciar_comunidades(comunidade_controller)
            elif opcao == 2:
                gerenciar_organizacoes(organizacao_controller, comunidade_controller)    
            elif opcao == 0:
                print(f'Encerrando o sistema ...')
                break
            else:
                print('Opção Inválida. Tente novamente...')
        except ValueError:  
            print(f'Oops!  No valid.  Try again...')  


def gerenciar_comunidades(comunidade_controller):

    while True:
        print(f'\n########## GERENCIAR COMUNIDADES ##########')
        print(f'[1] Cadastrar Comunidade')
        print(f'[2] Listar Comunidades')
        print(f'[3] Pesquisar Comunidade')
        print(f'[4] Atualizar Comunidade')
        print(f'[5] Deletar Comunidade')
        print(f'[0] Voltar')
        print(f'##########################################')

        try:
            opcao = int(input(f'Opção: '))

            if opcao == 1:
                print(f'\n########## Cadastro ##########')
                try:
                    nome = str(input('Nome: ')).strip().lower()
                    cod_ibge_bairro = str(input('Código IBGE do Bairro: ')).strip().lower()
                    municipio = str(input('Município: ')).strip().lower()
                    uf = str(input('UF: ')).strip().lower()
                    
                    if comunidade_controller.criar_comunidade(nome, cod_ibge_bairro, municipio, uf):
                        print(f'Comunidade cadastrada com sucesso!')
                    else:
                        print(f'Já existe cadsatro com o mesmo código IBGE do bairro!')  
                except ValueError:
                    print(f'Oops!  No valid.  Try again...')     

            elif opcao == 2:
                larguraTotalLista = 110
                larguraID = 10
                larguraNome = 30
                larguraCod = 20
                larguraMun = 30
                larguraUf = 20
                print(f'\nLista de Comunidades:')
                print('-'*larguraTotalLista)
                print(f'{'ID':<{larguraID}} | {'NOME':<{larguraNome}} | {'COD IBGE BAIRRO':<{larguraCod}} | {'MUNICÍPIO':<{larguraMun}} | {'UF':<{larguraUf}}')

                comunidade = comunidade_controller.listar_comunidades()
                ComunidadeView.mostrar_comunidades(comunidade)
                print('-'*larguraTotalLista)

            elif opcao == 3:
                larguraTotalLista = 110
                larguraID = 10
                larguraNome = 30
                larguraCod = 20
                larguraMun = 30
                larguraUf = 20

                print(f'\nPesquisar Comunidade')
                print('-'*larguraTotalLista)
                cod_ibge_bairro = str(input('Infome o Código IBGE do Bairro: ')).strip().lower()

                print(f'\nResultado:')
                if comunidade_controller.buscar_comunidade(cod_ibge_bairro):
                    print('-'*larguraTotalLista)
                    print(f'{'ID':<{larguraID}} | {'NOME':<{larguraNome}} | {'COD IBGE BAIRRO':<{larguraCod}} | {'MUNICÍPIO':<{larguraMun}} | {'UF':<{larguraUf}}')
                    comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                    ComunidadeView.mostrar_comunidade(comunidade)
                    print('-'*larguraTotalLista)
                else:
                    print('Comunidade não localizada!')
                        
                
            elif opcao == 4:
                larguraTotalLista = 110
                larguraID = 10
                larguraNome = 30
                larguraCod = 20
                larguraMun = 30
                larguraUf = 20

                cod_ibge_bairro = str(input('\nInfome o Código IBGE do Bairro da comunidade que deseja atualizar: ')).strip().lower()
                print(f'\nResultado:')
                print('-'*larguraTotalLista)
                
                if comunidade_controller.buscar_comunidade(cod_ibge_bairro):
                    print(f'{'ID':<{larguraID}} | {'NOME':<{larguraNome}} | {'COD IBGE BAIRRO':<{larguraCod}} | {'MUNICÍPIO':<{larguraMun}} | {'UF':<{larguraUf}}')
                    comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                    ComunidadeView.mostrar_comunidade(comunidade)
                    print('-'*larguraTotalLista)
                    try:
                        continuar = int(input('''\nDeseja atualizar?
    [1] Sim
    [2] Não                                                                                     
    Opção: '''))
                        if continuar == 1:
                            print(f'\n########## Atualizar ##########')
                            novo_nome = str(input('Nome (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_cod_ibge_bairro = str(input('Código IBGE do Bairro (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_municipio = str(input('Município (ou clique ENTER para não alterar): ')).strip().lower()
                            novo_uf = str(input('UF (ou clique ENTER para não alterar): ')).strip().lower()
                            
                            if comunidade_controller.atualizar_comunidade(cod_ibge_bairro, novo_nome, novo_cod_ibge_bairro, novo_municipio, novo_uf):
                                print('\nComunidade atualizada com sucesso!')
                            else:
                                print('\nJá existe um cadastro com o código IBGE bairro')    

                        elif continuar == 2:
                            True
                        else:
                            print('Opção Inválida') 
                    except ValueError:
                        print(f'Oops!  No valid.  Try again...')         
                else:
                    print('Comunidade não localizada')           

            elif opcao == 5:
                larguraTotalLista = 110
                larguraID = 10
                larguraNome = 30
                larguraCod = 20
                larguraMun = 30
                larguraUf = 20

                cod_ibge_bairro = str(input('\nInfome o Código IBGE do Bairro da comunidade que deseja excluir: ')).strip().lower()
                print(f'\nResultado:')
                print('-'*larguraTotalLista)

                if comunidade_controller.buscar_comunidade(cod_ibge_bairro):
                    print(f'{'ID':<{larguraID}} | {'NOME':<{larguraNome}} | {'COD IBGE BAIRRO':<{larguraCod}} | {'MUNICÍPIO':<{larguraMun}} | {'UF':<{larguraUf}}')
                    comunidade = comunidade_controller.buscar_comunidade(cod_ibge_bairro)
                    ComunidadeView.mostrar_comunidade(comunidade)
                    print('-'*larguraTotalLista)

                    try:
                        continuar = int(input('''\nDeseja deletar?
    [1] Sim
    [2] Não                                                                                     
    Opção: '''))
                        if continuar == 1:
                            comunidade_controller.deletar_comunidade(cod_ibge_bairro)
                            print('Comunidade deletada com sucesso!')
                        elif continuar == 2:
                            True
                        else:
                            print('Opção Inválida!')    

                    except ValueError: 
                        print(f'Oops!  No valid.  Try again...')    
                else:
                    print('Comunidade não localizada')

                      


        except ValueError:
            print(f'Oops!  No valid.  Try again...')      




def gerenciar_organizacoes(organizacao_controller, comunidade_controller):
      while True:
        print(f'\n########## GERENCIAR OGANIZAÇÕES ##########')
        print(f'[1] Cadastrar Organização')
        print(f'[2] Listar Organização')
        print(f'[3] Pesquisar Organização')
        print(f'[4] Atualizar Organização')
        print(f'[5] Deletar Organização')
        print(f'[6] Adicionar Comunidade à Organização')
        print(f'[0] Voltar')
        print(f'##########################################')
