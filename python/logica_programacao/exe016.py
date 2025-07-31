# Faça um Programa que peça dois números e imprima o maior
# deles.

def maiorNumero():
    numero1 = float(input('Digite o primeiro número: '))
    numero2 = float(input('Digite o segundo número: '))

    if numero1>numero2:
        mensagem = numero1
    else:
        mensagem = numero2

    return mensagem

resultado = maiorNumero()
print(f'O maior número é: {resultado}')        