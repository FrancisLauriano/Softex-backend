def soma():
    num1 = float(input('Digite o primeiro valor: '))
    num2 = float(input('Digite o segundo valor: '))
    soma = num1 + num2

    return print(f'O resultado da soma: {soma}')

def subtracao():
    num1 = float(input('Digite o primeiro valor: '))
    num2 = float(input('Digite o segundo valor: '))
    subtracao = num1 - num2

    return print(f'O resultado da subtração é: {subtracao}')

def multiplicacao():
    num1 = float(input('Digite o primeiro número: '))
    num2 = float(input('Digite o segundo número: '))
    multiplicacao = num1 * num2

    return print(f'O resultado da multiplicação é: {multiplicacao}')

def divisao():
    num1 = float(input('Digite o primeiro número: '))
    num2 = float(input('Digite o segundo número: '))

    if num2 == 0:
        print(f'Não é possível dividir um número por zero.') 
    else:
        divisao = num1 / num2    
        print(f'O resultado da divisão é : {divisao}')