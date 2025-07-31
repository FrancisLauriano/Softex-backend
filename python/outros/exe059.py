# Crie um programa que leia dois valores e mostre um menu na tela:
# 1- Somar, 2- multiplicar, 3- maior, 4- novos números, 5- Sair do programa
# Seu programa deverá realizar a operação solicitada em cada caso.

opcao = 0

num1 = float(input('Digite o 1ª número: '))
num2 = float(input('Digite o 2º número: '))

# while True:
while opcao != 5:
    opcao = int(input('''Selecione a uma opção de operação que deseja realizar
    [1] Somar
    [2] Multiplicar
    [3] Verificar o maior número
    [4] Inserir novos número
    [5] Sair do programa
    Opção: '''))

    if opcao == 1:
        soma = num1 + num2
        print('='*40)
        print(f'Soma de {num1} + {num2} = {soma}')
        print('='*40)
    elif opcao == 2:
        multi = num1*num2
        print('='*40)
        print(f'Multiplicação de {num1} X {num2} = {multi}')  
        print('='*40)
    elif opcao == 3:
        if num1 > num2:
            print('='*40)
            print(f'O número {num1} é maior que o número {num2}')
            print('='*40)
        else: 
            print('='*40)
            print(f'O número {num2} é maior que o número {num1}') 
            print('='*40) 
    elif opcao == 4:
        num1 = float(input('Digite o 1ª número: '))    
        num2 = float(input('Digite o 1ª número: '))  
    else: 
        print('='*40)
        print('Opção inválida. Tente novamente')    
        print('='*40)       
        
print('\nEncerrando programa...')
print('\nFinalizado')


