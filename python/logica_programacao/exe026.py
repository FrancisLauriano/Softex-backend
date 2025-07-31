# Defina quatro funções (soma, subtracao,
# multiplicacao e divisao) que recebe dois
# números como parâmetros e imprime o resultado
# deles. Depois, chamá-la com dois números
# diferentes.
# Utilize a função input para permitir que o usuário insira
# os dados necessários.


def soma(num1, num2):
    resultado = num1 + num2
    return print('Resultado da soma do número {} e número {}: {:.2f}'.format(num1, num2, resultado))

num1 = float(input('Insira o 1º número: '))
num2 = float(input('Insira o 2º número: '))

soma(num1, num2)


def subtracao(num1, num2):
    resultado = num1 - num2
    return print('Resultado da subtração do número {} e número {}: {:.2f}'.format(num1, num2, resultado))

num1 = float(input('Insira o 1º número: '))
num2 = float(input('Insira o 2º número: '))

subtracao(num1, num2)


def multiplicacao(num1, num2):
    resultado = num1 * num2
    return print('Resultado da multiplicação do número {} e número {}: {:.2f}'.format(num1, num2, resultado))

num1 = float(input('Insira o 1º número: '))
num2 = float(input('Insira o 2º número: '))

multiplicacao(num1, num2)


def divisao(num1, num2):
    resultado = num1 * num2
    if num2 != 0:
        mensagem = 'Resultado da divisão do número {} e número {}: {:.2f}'.format(num1, num2, resultado)
    else:
        mensagem = 'Não é permitido divisão por zero'

    return print(mensagem)    


num1 = float(input('Insira o 1º número: '))
num2 = float(input('Insira o 2º número: '))

divisao(num1, num2)