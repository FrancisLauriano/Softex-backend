def deletarTarefa(tarefas):
    larguraTotal = 60
    larguraNome = 20
    larguraDescricao = 40
    
    while True:
        nome = str(input('Informe o nome da tarefa que deseja excluir: ')).strip().lower()

        localizarTarefa = False

        for tarefa in tarefas:
            if tarefa['nome'] == nome:
                localizarTarefa = True
                print('')
                print(f'{'Tarefa localizada:'}')
                print('='*larguraTotal)
                print(f'{'NOME':<{larguraNome}} | {'DESCRIÇÃO':<{larguraDescricao}}')
                print('-'*larguraTotal)
                print(f'{tarefa['nome']:<{larguraNome}} | {tarefa['descricao']:<{larguraDescricao}}')
                print('='*larguraTotal,'\n')


                while True:
                    deletar = input('''Deseja deletar ou retornar ao menu inicial?
    [0] Voltar ao menu inicial
    [1] Confirmar a exclusão
    OPÇÃO: ''')
                    try:
                        if int(deletar) == 0 or int(deletar) == 1:
                            if int(deletar) == 0:
                                return
                            else:
                                tarefas.remove(tarefa)
                                print('')
                                print('='*larguraTotal)
                                print(f'{'Tarefa deleta com sucesso!':^{larguraTotal}}')
                                print('='*larguraTotal,'\n')
                                break
                        else:
                            print('')
                            print('='*larguraTotal)
                            print(f'{'Opção inválida!':^{larguraTotal}}')
                            print('='*larguraTotal,'\n')
                    except:
                        print('')
                        print('='*larguraTotal)
                        print(f'{'Opção inválida!':^{larguraTotal}}')
                        print('='*larguraTotal,'\n')
                               

        if localizarTarefa == False:
            print('')
            print('='*larguraTotal)
            print(f'{'Tarefa não localizada!':^{larguraTotal}}')
            print('='*larguraTotal,'\n')

            while True:

                continuar = input('''Deseja excluir outra tarefa ou retornar ao menu inicial?
        [0] Voltar ao menu inicial
        [1] Excluir Tarefa
        OPÇÃO: ''')
                
                try:
                    if int(continuar) == 1 or int(continuar) == 0:
                        if int(continuar) == 0:
                            return
                        else:
                            break
                    else:
                        print('')
                        print('='*larguraTotal)
                        print(f'{'Opção inválida!':^{larguraTotal}}')
                        print('='*larguraTotal,'\n')
                except: 
                    print('')
                    print('='*larguraTotal)
                    print(f'{'Opção inválida!':^{larguraTotal}}')
                    print('='*larguraTotal,'\n')       
        
        if localizarTarefa == True:
            break
    