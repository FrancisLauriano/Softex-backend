def listarTarefas(tarefas):
    larguraNome = 20
    larguraDescricao = 40
    larguraTotal = 60

    titulo = 'Lista de Tarefas'

    print()
    print('='*larguraTotal)
    print(f'{titulo:^{larguraTotal}}')
    print('='*larguraTotal)

    print(f'{'Nome':<{larguraNome}} | {'Descrição':<{larguraDescricao}}')
    print('-'*larguraTotal)

    for tarefa in tarefas:
        print(f'{tarefa['nome']:<{larguraNome}} | {tarefa['descricao']:<{larguraDescricao}}')
    
    print('='*larguraTotal)
    print()