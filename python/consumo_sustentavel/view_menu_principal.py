from controller import ComunidadeController, OrganizacaoController
from view_gerenciar_comunidades import gerenciar_comunidades
from view_gerenciar_organizacoes import gerenciar_organizacoes
from view_gerenciar_relacionamentos import gerenciar_relacionamentos
from utils import limpar_terminal, pausar_execucao
from time import sleep

def menu_principal():
    comunidade_controller = ComunidadeController()
    organizacao_controller = OrganizacaoController()

    while True:
        limpar_terminal()
        print(f'\n#################### MENU PRINCIPAL ####################\n')
        print(f'[1] Gerenciar Comunidades')
        print(f'[2] Gerenciar Organizações')
        print(f'[3] Gerenciar relação entre Comunidades e Organizações')
        print(f'[0] Sair')
        print(f'\n########################################################')
        
        try:
            opcao = int(input(f'Opção: '))
            limpar_terminal()

            if opcao == 1:
                gerenciar_comunidades(comunidade_controller)
            elif opcao == 2:
                gerenciar_organizacoes(organizacao_controller, comunidade_controller)    
            elif opcao == 3:
                gerenciar_relacionamentos(organizacao_controller, comunidade_controller)
            elif opcao == 0:
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
                break
            else:
                print('\n----------------------------------')    
                print('Opção Inválida. Tente novamente...')
                print('----------------------------------') 
                pausar_execucao()   
        except ValueError:  
            print(f'\n------------------------------')
            print(f'Oops!  No valid.  Try again...')   
            print(f'------------------------------')
            pausar_execucao()



