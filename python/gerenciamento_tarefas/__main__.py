from time import sleep
from cadastrarTarefa import cadastrarTarefa
from atualizarTarefa import atualizarTarefa
from deletarTarefa import  deletarTarefa
from listarTarefas import listarTarefas

tarefas = [
    {'nome': 'tarefa 1', 'descricao': 'estou descrevendo a tarefa 1'},
    {'nome': 'tarefa 2', 'descricao': 'estou descrevendo a tarefa 2'}
    ]


def main():
    larguraTotal = 40

    while True:
        print('')
        opcao = input('''########## MENU ##########
[1] Cadastrar uma Tarefa
[2] Alterar uma Tarefa
[3] Excluir uma tarefa
[4] Listar uma Tarefa
[5] Sair
##########################
OPÇÃO: ''')
        
        
        try:
            if int(opcao) >= 1 and int(opcao) <= 5:    
                if int(opcao) == 1:  
                    cadastrarTarefa(tarefas)

                elif int(opcao) == 2: 
                    atualizarTarefa(tarefas)

                elif int(opcao) == 3:
                    deletarTarefa(tarefas)            

                elif int(opcao) == 4:
                    listarTarefas(tarefas)     

                else:
                    print(f'\nEncerrando o sistema de tarefas...')
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
                    break
            else:
                print('='*larguraTotal) 
                print(f'{'Opção Invalida!':^{larguraTotal}}')
                print('='*larguraTotal,'\n') 

        except:
            print('='*larguraTotal) 
            print(f'{'Opção Invalida!':^{larguraTotal}}')
            print('='*larguraTotal,'\n') 

    print('\nSistema Finalizado!')    


main()


