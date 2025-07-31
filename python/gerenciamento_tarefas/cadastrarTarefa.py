def cadastrarTarefa(tarefas):
    larguraTotal = 60

    while True:
        nome = str(input('Informe o nome da tarefa que deseja cadastrar: ')).strip().lower()
        descricao = str(input('Informe a descrição da tarefa: ')).strip().lower()

        localizarTarefa = False

        for tarefa in tarefas:

            if tarefa['nome'] == nome:
                localizarTarefa = True
                print('')
                print('='*larguraTotal)
                print(f'{f'Já existe um cadastro para "{tarefa['nome']}"':^{larguraTotal}}')
                print('='*larguraTotal,'\n')

                while True:
                    continuar = input('''Deseja cadastrar outra tarefa ou retornar ao menu inicial?
[0] Voltar ao menu inicial
[1] Cadastrar Tarefa
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

                break            
                                        
        if localizarTarefa == False:
            tarefa = {
                'nome': nome,
                'descricao': descricao
            }
            tarefas.append(tarefa)

            print('')
            print('='*larguraTotal)
            print(f'{f'Tarefa "{nome}" cadastrada com sucesso!':^{larguraTotal}}')
            print('='*larguraTotal,'\n')
            break

       
            

