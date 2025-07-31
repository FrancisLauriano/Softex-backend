# Crie um algoritmo que verifique se um número é par ou ímpar.

def parOuImpar():
    numero = int(input('Digite o número a ser verificado: '))

    if numero % 2 == 0:
        classificacao = 'É par'
    else:
        classificacao = 'É ímpar'

    return classificacao

resultado = parOuImpar()
print(f'O resultado: {resultado}')    
 