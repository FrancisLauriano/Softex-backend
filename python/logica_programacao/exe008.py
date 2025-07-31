# Escreva um programa Python que determine se um número fornecido pelo usuário é positivo, negativo ou zero.

def positivoNegativo():
    numero = float(input('Digite o número que deseja verificar: '))

    if numero>0:
        resultado = 'Número é positivo'
    elif numero<0:
        resultado = 'Número é negativo'
    else:
        resultado = 'Número é zero'

    return resultado

mostraTela = positivoNegativo()
print(mostraTela)
