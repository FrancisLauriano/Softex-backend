def atualizarTarefa(tarefas):
    larguraTotal = 60
    larguraNome = 20
    larguraDescricao = 40
    
    while True:
        nome = str(input('Informe o nome da tarefa que deseja alterar: ')).strip().lower()

        localizarTarefa = False

        for tarefa in tarefas:
                       
            if tarefa['nome'] == nome:
                localizarTarefa = True
                print('')
                print(f'Tarefa localizada:')
                print('='*larguraTotal)
                print(f'{'NOME':<{larguraNome}} | {'DESCRIÇÃO':<{larguraDescricao}}')
                print(f'-'*larguraTotal)
                print(f'{tarefa['nome']:<{larguraNome}} | {tarefa['descricao']:<{larguraDescricao}}')
                print('='*larguraTotal,'\n')

                novoNome = str(input('Informe novo nome ou aperte ENTER para manter o nome atual: ')).strip().lower()   
                novaDescricao = str(input('Informe nova descrição ou aperte ENTER para manter a descrição atual: ')).strip().lower()

                if novoNome != '':
                    tarefa['nome'] = novoNome

                if novaDescricao != '':
                    tarefa['descricao'] = novaDescricao
                
                print('')
                print('='*larguraTotal)
                print(f'{f'Tarefa "{tarefa['nome']}" atualizada com sucesso!':^{larguraTotal}}')
                print('='*larguraTotal,'\n') 
                break   

          
        if localizarTarefa == False:
            print('')
            print('='*larguraTotal)
            print(f'{f'Tarefa "{nome}" não localizada!':^{larguraTotal}}')
            print('='*larguraTotal,'\n')

            while True:
                continuar = input('''Deseja alterar outra tarefa ou retornar ao menu anterior?
[0] Voltar ao menu anterior
[1] Alterar Tarefa
OPÇÃO: ''')
                try:
                    if int(continuar) == 0 or int(continuar) == 1:
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










