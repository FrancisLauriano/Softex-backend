# Crie um programa que leia um número inteiro e mostre na
# tela se ele é PAR ou ÍMPAR.

def parOuImpar():
    numero = int(input('Digite um número: '))

    if numero % 2 == 0:
        mensagem = 'O número {} é par'.format(numero)
    else:
        mensagem = 'O número {} é ímpar'.format(numero)

    return mensagem

texto = parOuImpar()
print(texto)